const express = require("express");
const donationController = require("../routeControllers/donations/donations");
const protectRoute =
  require("../routeControllers/authentication/auth").protectRoute;
const checkUserRole = require("../middlewares/authCheck");
const router = express.Router({ mergeParams: true });

router.use(protectRoute);

router.get(
  "/user/:id",
  checkUserRole.restrictRole("admin"),
  donationController.getUserDonation
);

router
  .route("/")
  .get(donationController.getUserDonation)
  .post(
    checkUserRole.restrictRole("user"),
    donationController.setDonationAndUserId,
    donationController.createDonation
  );

module.exports = router;
