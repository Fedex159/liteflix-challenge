import React from "react";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import ButtonAddList from "./ButtonAddList/ButtonAddList";
import s from "./TopMovie.module.css";

function TopMovie({ title }) {
  return (
    <div className={s.container}>
      <h4 className={s.subtitle}>
        Original de <strong>liteflix</strong>
      </h4>
      <h2 className={s.title}>{title}</h2>
      <div className={s.buttons}>
        <ButtonPlay />
        <ButtonAddList />
      </div>
    </div>
  );
}

export default TopMovie;
