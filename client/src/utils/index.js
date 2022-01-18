import axios from "axios";

export async function getMovies(type) {
  const { data } = await axios.get(`http://localhost:3001/movies/${type}`);
  return data;
}
