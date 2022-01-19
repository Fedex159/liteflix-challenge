import React from "react";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import Star from "../../../../assets/imgs/Star.png";
import s from "./CardMovie.module.css";

function CardMovie({ title, img, ranking, year }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.play}>
        <ButtonPlay />
      </div>
      <h4 className={s.title}>{title}</h4>
      <div className={s.infoHover}>
        {ranking ? (
          <div>
            <img src={Star} alt="star" />
            <h5>{ranking}</h5>
          </div>
        ) : null}
        {year ? <h5>{year}</h5> : null}
      </div>
    </div>
  );
}

export default CardMovie;
