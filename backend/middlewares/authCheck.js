const AppError = require("../utils/appError");
const Discussion = require("../models/donation-model");
const Forest = require("../models/forest-model");

const checkForAdmin = (access, user) => {
  if (access && access.admin) {
    if (user.role === "admin") return true;
  }
  return false;
};

exports.restrictRole = (...roles) => {
  return (req, resp, next) => {
    if (req.user.email === "makasi@gmail.comm") {
      req.user.role = "admin";
    }
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have permission to perform this action!", 403)
      );
    }
    next();
  };
};

exports.isForestOwner = (access) => {
  return async (req, resp, next) => {
    const forestId = req.params.id;
    const forest = await Forest.findById(forestId).select(
      "isSold _id postedBy"
    );
    let isAllowed =
      req.user.id.valueOf() == forest.postedBy.valueOf() ? true : false;
    let isAdmin = checkForAdmin(access, req.user);
    if (!(isAllowed || isAdmin))
      //and if not already sold
      next(
        new AppError("You don't have permission to modify this Forest!", 403)
      );
    next();
  };
};

exports.isDiscussionOwner = (access) => {
  return (req, resp, next) => {
    const discussionId = req.params.id;
    const discussion = Discussion.findById(discussionId).select("userId");
    let isAllowed = req.user.id === discussion.userId;
    isAllowed = checkForAdmin(access, req.user);
    if (!isAllowed)
      //and if not already sold
      next(
        new AppError(
          "You don't have permission to modify this Discussion!",
          403
        )
      );
    next();
  };
};
