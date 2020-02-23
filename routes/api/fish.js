const router = require("express").Router();

// Matches with "/api/favorites"
router.route("/")
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/badges/:id"
router
  .route("/:id")
  .get(badgesController.findById)
  .put(badgesController.update)

module.exports = router;
