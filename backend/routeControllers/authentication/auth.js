const User = require("../../models/user-model");
const AppError = require("../../utils/appError");
const catchAsyncErrors = require("../../utils/catchAsyncError");
const { signJWTtoken, verifyJWTtoken } = require("../../utils/handleJWT");
const { sendResponce, sendRespWithToken } = require("../../utils/sendResponce");

exports.loginUser = catchAsyncErrors(async (req, resp, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return next(new AppError("No user with given email and password", 404));

  if (user) {
    const pCompare = await user.comparePassword(password, user.password);
    if (!pCompare) return next(new AppError("wrong credentials!"), 401);
  }

  const freshUser = await User.findById(user.id).select(["-password", "-__v"]);

  const token = await signJWTtoken({ id: user.id, name: user.name });
  freshUser.password = undefined;
  sendRespWithToken(200, { user: freshUser }, resp, token);
});

exports.registerUser = catchAsyncErrors(async (req, resp, next) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password)
    return next(new AppError("All fields are required!", 400));

  if (await User.findOne({ email }))
    return next(
      new AppError("Email already in use! please sign in instead.", 401)
    );

  try {
    await User.create({ email, name, password });
    sendResponce(200, `Registration Success!`, resp);
  } catch (error) {
    console.log(error);
    return next(
      new AppError("Couldn't send email to the destination email!", 500)
    );
  }
});

exports.protectRoute = catchAsyncErrors(async (req, resp, next) => {
  let tokenString = "";

  if (req.headers.authorization) {
    tokenArray = req.header("authorization").split(" ");
    tokenString = tokenArray[0] === "Bearer" ? tokenArray[1] : null;
  } else if (req.cookies.jwt) {
    tokenString = req.cookies.jwt;
  } else {
    return next(new AppError("Unauthorized! please sign in first!", 401));
  }

  if (!tokenString)
    return next(new AppError("Unauthorized! please sign in first!", 401));

  const decodedToken = await verifyJWTtoken(tokenString);
  const userExist = await User.findById(decodedToken.id).select([
    "+password",
    "-__v",
  ]);

  if (!userExist)
    return next(
      new AppError("User no longer exist! please sign in again!", 401)
    );

  if (userExist.checkPasswordChange(decodedToken.iat))
    return next(
      new AppError("User recently changed password! please sign in again!", 401)
    );

  req.user = userExist;
  next();
});
