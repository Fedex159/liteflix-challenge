import React from "react";
import s from "./MenuIcon.module.css";

function MenuIcon() {
  return (
    <div className={s.container}>
      <div className={s.lineFull}></div>
      <div className={s.lineFull}></div>
      <div className={s.lineMedium}></div>
    </div>
  );
}

export default MenuIcon;
