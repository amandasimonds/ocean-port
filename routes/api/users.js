const router = require("express").Router();
const userController = require("../../controllers/userController")
// Matches with "/api/favorites"
router.route("/login", passport.authenticate("local"))
  .post(userController.login);

  router.route("/signup")
  .post(userController.createSignUp);

  router.route("/logout")
  .get(userController.logout)
 
  router.route("/user_data")
  .get(userController.user_data)
 
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)

module.exports = router;
