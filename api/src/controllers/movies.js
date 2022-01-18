require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

async function getNowPlayingMovie() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  );
  const result = data.results[0];
  return {
    id: result.id,
    img: `https://image.tmdb.org/t/p/original${result["backdrop_path"]}`,
    title: result.title,
  };
}

async function getPopularMovies() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  const results = data.results.slice(0, 4).map((m) => ({
    id: m.id,
    img: `https://image.tmdb.org/t/p/original${m["backdrop_path"]}`,
    title: m.title,
    ranking: m["vote_average"],
    year: m["release_date"].split("-")[0],
  }));
  return results;
}

function getMoviesFromDB() {}

async function getMovies(req, res, next) {
  try {
    const { type } = req.params;

    switch (type) {
      case "now_playing":
        res.json(await getNowPlayingMovie());
        break;
      case "popular":
        res.json(await getPopularMovies());
        break;
      case "db":
        break;
      default:
        res.status(404).json({ message: "Only valid type movies" });
    }
  } catch (e) {
    next(e);
  }
}

module.exports = { getMovies };
