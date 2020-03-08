// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const router = require("express").Router();
const authMiddleware = require("../config/middleware/isAuthenticated");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/api/login", passport.authenticate("local",{ 
    successRedirect: "/home", 
    failureFlash: true }),
   function(req, res) {
    // console.log(req.user.dataValues)
    console.log("from userRoutes, sign in successful")
    res.json({
      user: req.user,
      loggedIn: true
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/users/signup", function(req, res) {
    console.log("post request received", req.user)
    // console.log(req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

router.get("/home", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

module.exports = router