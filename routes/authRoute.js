const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const { userModel } = require("../models/userModel");
const addUser = require("../controller/userController");
const authController = require("../controller/auth_Controller");

const router = express.Router();

router.get("/login", forwardAuthenticated, authController.login);

router.get("/register", forwardAuthenticated, authController.register)

router.post("/login/userlogin",  authController.loginSubmit);
// router.post("/login/userlogin",  authController.loginInfo);

router.post("/register/addUser", forwardAuthenticated, authController.registerSubmit);

module.exports = router;
