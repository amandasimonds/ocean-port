const router = require("express").Router();
const fishRoutes = require("./fish");

// Book routes
router.use("/fish", fishRoutes);

module.exports = router;
