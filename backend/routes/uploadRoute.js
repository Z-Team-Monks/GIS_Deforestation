const express = require("express");
const uploadController = require("../routeControllers/donations/donations");
const protectRoute =
  require("../routeControllers/authentication/auth").protectRoute;
const checkUserRole = require("../middlewares/authCheck");
const upload = require("../utils/upload");

const router = express.Router();
router.use(protectRoute);

router
  .route("/images")
  .post(
    checkUserRole.restrictRole("user"),
    upload.single("image"),
    uploadController.setDonationAndUserId,
    uploadController.createDonation
  );

router
  .route("/image")
  .post(
    checkUserRole.restrictRole("user"),
    uploadController.setDonationAndUserId,
    upload.array("images", 6),
    uploadController.createDonation
  );

module.exports = router;
