const router = require("express").Router();
const fishRoutes = require("./fish");
const userRoutes = require("../userRoutes")

// router.use("/fish", fishRoutes);
router.use("/users", userRoutes)
module.exports = router;
