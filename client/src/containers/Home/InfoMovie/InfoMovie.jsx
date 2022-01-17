import React from "react";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import ButtonAddList from "./ButtonAddList/ButtonAddList";
import s from "./InfoMovie.module.css";

function InfoMovie({ title, subtitle }) {
  return (
    <div className={s.container}>
      <h4 className={s.subtitle}>{subtitle}</h4>
      <h2 className={s.title}>{title}</h2>
      <div className={s.buttons}>
        <ButtonPlay />
        <ButtonAddList />
      </div>
    </div>
  );
}

export default InfoMovie;
