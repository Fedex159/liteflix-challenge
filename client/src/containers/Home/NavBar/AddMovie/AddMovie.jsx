import React, { useContext } from "react";
import PlusIcon from "../../../../components/PlusIcon/PlusIcon";
import { StateGlobal } from "../../Home";
import s from "./AddMovie.module.css";

function AddMovie() {
  const { handleModal, showModal } = useContext(StateGlobal);
  return (
    <div className={s.container}>
      <button
        className={s.button}
        onClick={handleModal}
        style={{ visibility: `${showModal ? "hidden" : "unset"}` }}
      >
        <div className={s.plus}>
          <PlusIcon />
        </div>
        <h4>Agregar Película</h4>
      </button>
    </div>
  );
}

export default AddMovie;
