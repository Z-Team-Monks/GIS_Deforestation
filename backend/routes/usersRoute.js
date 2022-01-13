const express = require("express");

const routeUsers = require("../routeControllers/users/users");
const checkUserRole = require("../middlewares/authCheck");
const donationRoute = require("../routes/donationsRoute");

const router = express.Router();

router
  .route("/")
  .get(checkUserRole.restrictRole("admin"), routeUsers.getAllUsers); //not ideal unless for the admin

// users access
router.get("/me", routeUsers.getMe, routeUsers.getUser);

router.patch("/me/updateMe", routeUsers.updateMe);

router.patch("/me/updateMyPassword", routeUsers.updateMyPassword);

router.delete("/me/deleteMe", routeUsers.deleteMe);

router.use("/me/donations", donationRoute);

// protect all route that comes after this middleware
router.use(checkUserRole.restrictRole(["admin"]));

// GET, PATCH, DELETE
// /users/id (get specific user based on id)
router
  .route("/:id")
  .get(routeUsers.getUser)
  .patch(routeUsers.updateUser)
  .delete(routeUsers.deleteUser);

module.exports = router;
