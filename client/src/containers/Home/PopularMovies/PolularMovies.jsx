import React, { useContext } from "react";
import DropDown from "./DropDown/DropDown";
import CardMovie from "./CardMovie/CardMovie";
import { StateGlobal } from "../Home";
import s from "./PopularMovies.module.css";

function PopularMovies() {
  const { popularMovies } = useContext(StateGlobal);

  return (
    <div className={s.container}>
      <DropDown />
      <div className={s.movies}>
        {popularMovies.map((m, i) => (
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
