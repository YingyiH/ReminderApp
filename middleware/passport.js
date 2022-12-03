const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controller/userController");

// {email: ...,
// password: ...
//}
// default: email will be undefined,because:
// It actually is:
const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
    
    // always call null infront
      ? done(null, user) // here the user will be sent to the passport.serialzeUser function
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

// tell the passport create a session for user:
// create a req.user for every user:
passport.serializeUser(function (user, done) {
  done(null, user.id); //store entire session of the user
  // done(null,user) is not recommanded because anti pattern

});

// the flow for the passport.serializeUser function:
passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

module.exports = passport.use(localLogin);
