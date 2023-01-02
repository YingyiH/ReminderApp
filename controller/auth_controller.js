let database = require("../database");
const userModel = require("../models/userModel").userModel;
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    // implement
    let formData = req.body
    console.log(formData)
    // to find if the user has already been added
    let variafy = userModel.findOne(formData.email);
    if (variafy === null){
      let user = {
        id: Object.keys(database).length + 1,
        name: formData.email.split("@")[0],
        email: formData.email,
        password: formData.password,
        reminders: []
      }
      database.push(user)
      res.redirect("/");
    } else {
      res.send("<p>This user exists. Please log in instead.</p>")
      res.redirect("/auth/login");
    }
  },
};

module.exports = authController;
