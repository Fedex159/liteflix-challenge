import React from "react";
import DropDown from "./DropDown/DropDown";
import CardMovie from "./CardMovie/CardMovie";
import s from "./MoviesContainer.module.css";

function MoviesContainer({ movies }) {
  return (
    <div className={s.container}>
      <DropDown />
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

export default MoviesContainer;
