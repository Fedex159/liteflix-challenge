import React from "react";
import plus from "../../../../assets/imgs/plus.png";
import s from "./ButtonAddList.module.css";

function ButtonAddList() {
  return (
    <div className={s.container}>
      <button>
        <img src={plus} alt="plus" />
        <h4 className={s.title}>Mi lista</h4>
      </button>
    </div>
  );
}

export default ButtonAddList;
