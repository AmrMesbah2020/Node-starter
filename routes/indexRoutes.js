const express = require("express");
const router = express.Router();

//User Route
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
router.use("/v1/user", userRoutes);
router.use("/v1/post", postRoutes);

module.exports = router;
