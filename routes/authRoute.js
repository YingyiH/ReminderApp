const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const { userModel } = require("../models/userModel");

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => res.render("auth/login")); //login.ejs is going to be sent back

router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/reminder/index",
    failureRedirect: "/auth/login",
  })
);
router.post("/login",(req,res) =>{
  const email = req.body.email
  const password = req.body.password
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
