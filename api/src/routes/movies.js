const express = require("express");
const router = express.Router();
const { getMovies } = require("../controllers/movies");

router.get("/:type", getMovies);

module.exports = router;
