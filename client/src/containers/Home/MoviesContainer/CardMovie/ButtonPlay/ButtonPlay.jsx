import React, { useState } from "react";
import playNormal from "../../../../../assets/imgs/play.png";
import playBlack from "../../../../../assets/imgs/playblack.png";
import s from "./ButtonPlay.module.css";

function ButtonPlay() {
  const [img, setImg] = useState(playNormal);

  const handleOver = () => {
    setImg(playBlack);
  };

  const handleOut = () => {
    setImg(playNormal);
  };

  return (
    <div
      className={s.container}
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      <img src={img} alt="play" />
    </div>
  );
}

export default ButtonPlay;
