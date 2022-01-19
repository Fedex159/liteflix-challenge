import axios from "axios";

export async function getMovies(type) {
  const { data } = await axios.get(`/movies/${type}`);
  return data;
}

export async function addMovieToDB(movie) {
  const { data } = await axios.post("/movies", movie);
  return data;
}
