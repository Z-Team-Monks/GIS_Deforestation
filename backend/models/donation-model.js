const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "donation must have user id"],
  },
  forestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Forest",
    required: [true, "donation must have forest id"],
  },
  amount: {
    type: Number,
    required: [true, "donation must have total price"],
  },
  donatedAt: {
    type: Date,
    default: Date.now,
  },
});

// forestSchema.virtual("forest", {
//   ref: "Donation",
//   foreignField: "commentedOn",
//   localField: "_id",
// });

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
