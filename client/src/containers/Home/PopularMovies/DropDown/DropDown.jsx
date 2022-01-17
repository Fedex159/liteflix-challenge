import React from "react";
import arrow from "../../../../assets/imgs/arrow.png";
import s from "./DropDown.module.css";

function DropDown({ option }) {
  return (
    <div className={s.container}>
      <button>
        <h4>
          VER: <strong>{option}</strong>
        </h4>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default DropDown;
