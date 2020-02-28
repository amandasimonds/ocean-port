const router = require("express").Router();
const fishRoutes = require("./fish");
const userRoutes = require("./users")

// Book routes
router.use("/fish", fishRoutes);
router.use("/", userRoutes)
module.exports = router;
