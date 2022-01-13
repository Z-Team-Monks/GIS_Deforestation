const catchAsyncErrors = require("../../utils/catchAsyncError");
const Discussion = require("../../models/discussion-model");
const factory = require("../handleFactory");

exports.getAllDiscussions = factory.getAll(Discussion);
exports.getDiscussion = factory.getOne(Discussion);
exports.createDiscussion = factory.createOne(Discussion);
exports.updateDiscussion = factory.updateOne(Discussion);
exports.deleteDiscussion = factory.deleteOne(Discussion);

exports.getUserDiscussion = catchAsyncErrors(async (req, resp, next) => {
  const { id } = req.params;
  const Discussions = await Discussion.find({ userId: id });

  resp.status(200).json({
    status: "success",
    results: Discussions.length,
    message: {
      discussions: Discussions,
    },
  });
});

exports.getForestDiscussion = catchAsyncErrors(async (req, resp, next) => {
  const { id } = req.params;
  const Discussions = await Discussion.find({ forestId: id });

  resp.status(200).json({
    status: "success",
    results: Discussions.length,
    message: {
      discussions: Discussions,
    },
  });
});

exports.setDiscussionAndUserId = (req, resp, next) => {
  if (!req.body.commentedOn) req.body.commentedOn = req.params.forestId;
  if (!req.body.commentedBy) req.body.commentedBy = req.user._id;
  next();
};
