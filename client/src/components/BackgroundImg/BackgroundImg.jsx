import React from "react";
import s from "./BackgroundImg.module.css";

function BackgroundImg({ src }) {
  return (
    <div className={s.container}>
      <img src={src} alt="background_img" />
    </div>
  );
}

export default BackgroundImg;
