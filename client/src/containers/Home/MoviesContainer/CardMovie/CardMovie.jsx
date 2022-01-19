import React from "react";
import Star from "../../../../assets/imgs/Star.png";
import s from "./CardMovie.module.css";

function CardMovie({ title, img, ranking, year }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.play}></div>
      <h4 className={s.title}>{title}</h4>
      <div className={s.infoHover}>
        <div>
          <img src={Star} alt="star" />
          <h5>{ranking}</h5>
        </div>
        <h5>{year}</h5>
      </div>
    </div>
  );
}

export default CardMovie;
