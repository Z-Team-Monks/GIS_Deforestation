const express = require("express");

const routeForests = require("../routeControllers/forests/forests");
const protectRoute =
  require("../routeControllers/authentication/auth").protectRoute;
const checkUserRole = require("../middlewares/authCheck");
const discussionsRoute = require("./discussionsRoute");
const donationRoute = require("./donationsRoute");

const router = express.Router();

router
  .route("/")
  .get(routeForests.getAllForests)
  .post(protectRoute, routeForests.createForest);

router
  .route("/most-deforested")
  .get(routeForests.aliasTopDeforested, routeForests.getAllForests);

router.route("/regional").get(routeForests.getByRegion);
router.route("/search").get(routeForests.searchForAreas);

router
  .route("/:id")
  .get(routeForests.getForest)
  .patch(
    protectRoute,
    checkUserRole.isForestOwner({ admin: true }),
    routeForests.updateForest
  )
  .delete(
    protectRoute,
    checkUserRole.restrictRole("admin"),
    routeForests.deleteForest
  );

router.use("/:forestId/discussions", discussionsRoute);
router.use("/:forestId/donation", donationRoute);
module.exports = router;
