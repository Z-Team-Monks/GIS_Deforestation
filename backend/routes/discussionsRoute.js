const express = require("express");
const discussionController = require("../routeControllers/discussions/discussions");
const protectRoute =
  require("../routeControllers/authentication/auth").protectRoute;
const checkUserRole = require("../middlewares/authCheck");
const router = express.Router({ mergeParams: true });

router.use(protectRoute);

router.get("/areas/:forestId", discussionController.getForestDiscussion);
router.get(
  "/user/:id",
  checkUserRole.restrictRole("admin"),
  discussionController.getUserDiscussion
);

router
  .route("/")
  .get(
    checkUserRole.restrictRole("admin"),
    discussionController.getAllDiscussions
  )
  .post(
    checkUserRole.restrictRole("user"),
    discussionController.setDiscussionAndUserId,
    discussionController.createDiscussion
  );

router
  .route("/:id")
  .get(checkUserRole.restrictRole("admin"), discussionController.getDiscussion)
  .patch(
    checkUserRole.isDiscussionOwner({ admin: true }),
    discussionController.updateDiscussion
  )
  .delete(
    checkUserRole.isDiscussionOwner({ admin: true }),
    discussionController.deleteDiscussion
  );

module.exports = router;
