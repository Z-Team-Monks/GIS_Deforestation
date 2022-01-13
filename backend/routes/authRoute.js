const express = require("express");

const routeAuth = require("../routeControllers/authentication/auth");

const router = express.Router();

router.route("/users/signin").post(routeAuth.loginUser);

router.route("/users/signup").post(routeAuth.registerUser);

module.exports = router;
