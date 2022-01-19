import React, { useState } from "react";
import plus from "../../../../assets/imgs/plus.png";
import ModalUploadMovie from "./ModalUploadMovie/ModalUploadMovie";
import s from "./AddMovie.module.css";

function AddMovie() {
  const [showAddMovie, setShowAddMovie] = useState(false);

  const handleModal = () => {
    setShowAddMovie((prev) => !prev);
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleModal}>
        <img src={plus} alt="plus" />
        <h4>Agregar Película</h4>
      </button>
      {showAddMovie ? <ModalUploadMovie handleModal={handleModal} /> : null}
    </div>
  );
}

export default AddMovie;
