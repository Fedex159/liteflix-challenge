import React from "react";
import PlusIcon from "../../../../components/PlusIcon/PlusIcon";
import s from "./ButtonAddList.module.css";

function ButtonAddList() {
  return (
    <div className={s.container}>
      <button>
        <div className={s.plus}>
          <PlusIcon />
        </div>
        <h4 className={s.title}>Mi lista</h4>
      </button>
    </div>
  );
}

export default ButtonAddList;
