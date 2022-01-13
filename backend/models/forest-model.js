const mongoose = require("mongoose");

const forestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product should have a name!"],
    },
    votes: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    imageCover: {
      type: String,
    },
    images: [String],
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    fundraised: {
      type: Number,
      default: 0.0,
    },
    deforestationRate: Number,
    forestCoverage: Number,
    region: {
      type: String,
      required: true,
    },
    plantation: {
      type: [
        {
          plant: String,
          description: String,
        },
      ],
    },
    wildlife: {
      type: [
        {
          animal: String,
          description: String,
        },
      ],
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

forestSchema.virtual("discussions", {
  ref: "Discussion",
  foreignField: "commentedOn",
  localField: "_id",
});

forestSchema.index({
  name: 1,
  region: 1,
});

forestSchema.index({ location: "2dsphere" });

const Forest = mongoose.model("Forest", forestSchema);

module.exports = Forest;
