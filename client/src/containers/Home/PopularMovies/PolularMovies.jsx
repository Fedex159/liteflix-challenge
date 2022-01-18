import React, { useState, useEffect } from "react";
import DropDown from "./DropDown/DropDown";
import CardMovie from "./CardMovie/CardMovie";
import { getMovies } from "../../../utils/index";
import s from "./PopularMovies.module.css";

const options = ["Populares", "Mis películas"];

function PopularMovies() {
  const [option, setOption] = useState(options[0]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("popular")
      .then((data) => setMovies(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={s.container}>
      <DropDown option={option} />
      <div className={s.movies}>
        {movies.map((m, i) => (
          <CardMovie
            key={i}
            title={m.title}
            img={m.img}
            ranking={m.ranking}
            year={m.year}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
