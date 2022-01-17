import React from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import PopularMovies from "./PopularMovies/PolularMovies";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.container}>
      <NavBar />
      <div className={s.movies}>
        <TopMovie title="La casa de papel" subtitle="Original de liteflix" />
        <PopularMovies />
      </div>
    </div>
  );
}

export default Home;
