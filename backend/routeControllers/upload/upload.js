const catchAsyncErrors = require("../../utils/catchAsyncError");
const Forest = require("../../models/forest-model");

exports.getUserDonation = catchAsyncErrors(async (req, resp, next) => {});

exports.imageadder = function (req, res, next) {
  if (req.file) {
    req.body.Image = req.file.path;
  }
  next();
};

exports.setDonationAndUserId = (req, resp, next) => {
  if (!req.body.forestId) req.body.forestId = req.params.forestId;
  if (!req.body.donatedBy) req.body.donatedBy = req.user.id;
  next();
};
