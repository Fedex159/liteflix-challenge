import React, { useContext } from "react";
import check from "../../../../../assets/imgs/check.png";
import { StateGlobal, options } from "../../../Home";
import s from "./BoxDrop.module.css";

const img = <img src={check} alt="check" />;

function BoxDrop() {
  const { option, setOption } = useContext(StateGlobal);
  return (
    <div className={s.container}>
      {options.map((o, i) => (
        <button
          key={`${o}_${i}`}
          value={o}
          onClick={(event) => setOption(event.currentTarget.value)}
        >
          <h4 className={option === o ? s.selected : null}>{o}</h4>
          {option === o ? img : null}
        </button>
      ))}
    </div>
  );
}

export default BoxDrop;
