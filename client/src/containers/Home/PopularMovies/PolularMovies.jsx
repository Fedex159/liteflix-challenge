import React, { useState } from "react";
import DropDown from "./DropDown/DropDown";
import CardMovie from "./CardMovie/CardMovie";
import img from "../../../assets/imgs/Bkg.png";
import s from "./PopularMovies.module.css";

const options = ["Populares", "Mis películas"];
const movies = [
  { title: "La  papel", img: img, rating: 7.8, year: 2015 },
  { title: "La casa de papel", img: img, rating: 7.8, year: 2015 },
  { title: "La casa de papel", img: img, rating: 7.8, year: 2015 },
  { title: "La casa de papel", img: img, rating: 7.8, year: 2015 },
];

function PopularMovies() {
  const [option, setOption] = useState(options[0]);

  return (
    <div className={s.container}>
      <DropDown option={option} />
      <div className={s.movies}>
        {movies.map((m, i) => (
          <CardMovie
            key={i}
            title={m.title}
            img={m.img}
            rating={m.rating}
            year={m.year}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
