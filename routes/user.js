const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");


router.route("/signup")
      .get(userController.createUserForm)
      .post(wrapAsync(userController.createUser));

router.route("/login")
    .get(userController.loginForm)
    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.loginUser );


// logout user
router.get("/logout", userController.logoutUser)

module.exports = router;