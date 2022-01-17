import React from "react";
import play from "../../../../assets/imgs/play.png";
import s from "./ButtonPlay.module.css";

function ButtonPlay() {
  return (
    <div className={s.container}>
      <button>
        <img className={s.triangle} src={play} alt="play" />
        <h4 className={s.title}>Reproducir</h4>
      </button>
    </div>
  );
}

export default ButtonPlay;
