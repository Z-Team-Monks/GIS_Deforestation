const User = require("../../models/user-model");
const AppError = require("../../utils/appError");
const catchAsyncErrors = require("../../utils/catchAsyncError");
const { signJWTtoken, verifyJWTtoken } = require("../../utils/handleJWT");
const { sendResponce, sendRespWithToken } = require("../../utils/sendResponce");
const factory = require("../handleFactory");

const filterBody = (reqBody, ...allowedFields) => {
  let newReqBody = {};
  Object.keys(reqBody).forEach((el) => {
    if (allowedFields.includes(el)) {
      newReqBody[el] = reqBody[el];
    }
  });
  return newReqBody;
};

// user operations
exports.getMe = (req, resp, next) => {
  req.params.id = req.user.id;
  next();
};
// exports.getMe = catchAsyncErrors(async (req, resp, next)=>{
//     req.user.password = undefined
//     req.user.active = undefined
//     req.user.role = req.user.role === 'user' ? undefined: req.user.role
//     sendResponce(200, {user: req.user}, resp);
// });

exports.updateMyPassword = catchAsyncErrors(async (req, resp, next) => {
  const { currentPassword, newPassword } = req.body;
  const user = req.user;
  if (!currentPassword || !newPassword)
    return next(new AppError("The current and new password is required!", 401));
  if (currentPassword === newPassword)
    return next(
      new AppError("Password is same! please choose different password", 401)
    );

  if (
    !(await user.comparePassword(currentPassword.toString(), req.user.password))
  )
    return next(new AppError("Current password is wrong!", 401));

  user.password = newPassword;
  await user.save();

  const newToken = await signJWTtoken({ id: user.id, name: user.name });
  req.user.password = undefined;
  sendRespWithToken(200, { user: req.user }, resp, newToken);
});

exports.updateMe = catchAsyncErrors(async (req, resp, next) => {
  const { currentPassword, newPassword } = req.body;
  if (currentPassword || newPassword)
    return next(
      new AppError(
        "This route is not for password update! use updateMyPassword.",
        400
      )
    );

  const filtedFields = filterBody(req.body, "name", "email");
  await User.findByIdAndUpdate(req.user.id, filtedFields, {
    new: true,
    runValidators: true,
  });

  req.user.password = undefined;
  sendResponce(200, { user: req.user }, resp);
});

exports.deleteMe = catchAsyncErrors(async (req, resp, next) => {
  const { password } = req.body;

  if (!password)
    return next(new AppError("Password is required for this operation!", 401));
  if (!(await req.user.comparePassword(password.toString(), req.user.password)))
    return next(new AppError("Password is wrong!", 401));
  await User.findByIdAndUpdate(req.user.id, { active: false });

  sendResponce(204, null, resp);
});

// admin operations

// dont try to update user password through this
exports.updateUser = factory.updateOne(User);
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User, { path: "myPosts", select: "-__v" });
exports.deleteUser = factory.deleteOne(User);
