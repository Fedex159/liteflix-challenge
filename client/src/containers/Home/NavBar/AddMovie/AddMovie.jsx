import React from "react";
import plus from "../../../../assets/imgs/plus.png";
import s from "./AddMovie.module.css";

function AddMovie() {
  return (
    <div className={s.container}>
      <img src={plus} alt="plus" />
      <button>Agregar Película</button>
    </div>
  );
}

export default AddMovie;
