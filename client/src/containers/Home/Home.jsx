import React, { useState, useEffect, createContext } from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import PopularMovies from "./PopularMovies/PolularMovies";
import { getMovies } from "../../utils";
import s from "./Home.module.css";

export const StateGlobal = createContext("Default value");
export const options = ["Populares", "Mis películas"];

function Home() {
  const [topMovie, setTopMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [option, setOption] = useState(options[0]);

  useEffect(() => {
    // Top movie
    getMovies("now_playing")
      .then((data) => setTopMovie(data))
      .catch((e) => console.log("now_playing", e));

    // Popular movies
    getMovies("popular")
      .then((data) => setPopularMovies(data))
      .catch((e) => console.log("popular", e));

    // My Movies
    getMovies("db")
      .then((data) => setMyMovies(data))
      .catch((e) => console.log("my movies", e));
  }, []);

  return (
    <StateGlobal.Provider
      value={{ popularMovies, myMovies, setMyMovies, option, setOption }}
    >
      <div
        className={s.container}
        style={{ backgroundImage: `url(${topMovie.img})` }}
      >
        <NavBar />
        <div className={s.movies}>
          <TopMovie title={topMovie.title} />
          <PopularMovies />
        </div>
      </div>
    </StateGlobal.Provider>
  );
}

export default Home;
