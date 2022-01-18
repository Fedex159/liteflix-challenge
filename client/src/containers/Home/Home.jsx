import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import PopularMovies from "./PopularMovies/PolularMovies";
import { getMovies } from "../../utils";
import s from "./Home.module.css";

function Home() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovies("now_playing")
      .then((data) => setMovie(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div
      className={s.container}
      style={{ backgroundImage: `url(${movie.img})` }}
    >
      <NavBar />
      <div className={s.movies}>
        <TopMovie title={movie.title} />
        <PopularMovies />
      </div>
    </div>
  );
}

export default Home;
