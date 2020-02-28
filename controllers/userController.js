const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
  login: function(req, res) {
    res.json(req.user);
  },

  createSignUp: function(req, res) {
    console.log("controller")
    db.User.create({
      email: req.email,
      password: req.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  },
  logout: function(req, res){
    req.logout();
    res.redirect("/");
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
