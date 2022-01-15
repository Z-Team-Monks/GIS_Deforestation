const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "dicussion must have title"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    commentedOn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Forest",
      required: [true, "dicussion needs to have forest id"],
    },
    commentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "dicussion needs to have user id"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

discussionSchema.index({ commentedOn: 1, commentedBy: 1 });

discussionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "commentedBy",
    select: "name",
  });

  next();
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
