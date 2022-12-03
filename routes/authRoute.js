const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const { userModel } = require("../models/userModel");
const addUser = require("../controller/userController");
const authController = require("../controller/auth_Controller");

const router = express.Router();

router.get("/login", forwardAuthenticated, authController.login);

router.get("/register", forwardAuthenticated, authController.register)

router.post("/login", forwardAuthenticated, authController.loginSubmit);

router.post("/register/addUser", forwardAuthenticated, authController.registerSubmit);

// router.post("/register/addUser", addUser.register);

// router.post("/login",
//   passport.authenticate("local", {
//     successRedirect: "/reminder/index",
//     failureRedirect: "/auth/login",
//   })
// );

// router.post("/login",(req,res) =>{
//   const email = req.body.email
//   const password = req.body.password
// })

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});



module.exports = router;
