const express = require("express");
const router = express.Router();
const { getMovies, addMovie } = require("../controllers/movies");

router.get("/:type", getMovies);

router.post("/", addMovie);

module.exports = router;
