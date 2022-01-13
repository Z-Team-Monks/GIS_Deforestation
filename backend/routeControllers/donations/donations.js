const catchAsyncErrors = require("../../utils/catchAsyncError");
const Donation = require("../../models/donation-model");
const Forest = require("../../models/forest-model");
const factory = require("../handleFactory");

exports.getAllDonations = factory.getAll(Donation);
exports.getDonation = factory.getOne(Donation);
exports.updateDonation = factory.updateOne(Donation);
exports.deleteDonation = factory.deleteOne(Donation);

exports.getUserDonation = catchAsyncErrors(async (req, resp, next) => {
  const donations = await Donation.find({ donatedBy: req.user.id }).populate(
    "forestId",
    ["name", "imageCover", "fundraised", "region"]
  );

  const amount = donations.reduce((total, curr) => (total += curr.amount), 0);
  resp.status(200).json({
    status: "success",
    results: donations.length,
    message: {
      totalDonation: amount,
      donations: donations,
    },
  });
});

exports.createDonation = catchAsyncErrors(async (req, res, next) => {
  const newDoc = await Donation.create(req.body);
  await Forest.findByIdAndUpdate(req.body.forestId, {
    $inc: { fundraised: req.body.amount },
  });

  res.status(201).json({
    status: "success",
    message: {
      data: newDoc,
    },
  });
});

exports.setDonationAndUserId = (req, resp, next) => {
  if (!req.body.forestId) req.body.forestId = req.params.forestId;
  if (!req.body.donatedBy) req.body.donatedBy = req.user.id;
  next();
};
