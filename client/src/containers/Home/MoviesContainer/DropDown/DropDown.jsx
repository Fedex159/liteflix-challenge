import React, { useState, useContext } from "react";
import arrow from "../../../../assets/imgs/arrow.png";
import BoxDrop from "./BoxDrop/BoxDrop";
import { StateGlobal } from "../../../Context/Context";
import s from "./DropDown.module.css";

function DropDown() {
  const [showBoxDrop, setShowBoxDrop] = useState(false);
  const { option } = useContext(StateGlobal);

  return (
    <div className={s.container}>
      <button
        className={s.buttonOption}
        onClick={() => setShowBoxDrop((prev) => !prev)}
      >
        <h4>
          VER: <strong>{option}</strong>
        </h4>
        <img src={arrow} alt="arrow" />
      </button>
      {showBoxDrop ? <BoxDrop /> : null}
    </div>
  );
}

export default DropDown;
