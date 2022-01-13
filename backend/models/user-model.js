const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user should have a name!"],
      minlength: [2, "User name should contain atleast 2 characters!"],
      maxlength: [24, "User name should contain at maximum 24 characters!"],
    },
    email: {
      type: String,
      required: [true, "user should have email!"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email. Please use valid email!"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "user should have password!"],
      minlength: 6,
      maxlength: 24,
      select: false,
    },
    avatar: {
      type: String,
    },
    registeredDate: {
      type: Date,
      default: Date.now(),
      validate: [validator.isDate, "Wrong date format"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("myPosts", {
  ref: "Forest",
  foreignField: "postedBy",
  localField: "_id",
});

// hash password before saving
userSchema.pre("save", async function (next) {
  // dont hash if the password is not modified to not hash hashed password
  if (!this.isModified("password")) return next();

  if (!this.isNew) this.passwordChangedAt = Date.now() - 1000;
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async (userPass, storedPass) => {
  return await bcrypt.compare(userPass, storedPass);
};

userSchema.methods.checkPasswordChange = (jwtTimeStamp) => {
  if (this.passwordChangedAt) {
    const passChangeTime = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimeStamp < passChangeTime;
  }
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
