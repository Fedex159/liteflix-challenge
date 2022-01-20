import React from "react";
import clip from "../../../../assets/imgs/clip.png";
import s from "./UploadInput.module.css";

function UploadInput({ handleDrop, handleInputFile }) {
  return (
    <div
      className={s.container}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <img src={clip} alt="clip" />
      <p>
        <strong>Agregá un archivo</strong>
        <span> o arrastralo y soltalo aquí</span>
      </p>
      <input
        type="file"
        name="file"
        className={s.inputFile}
        onChange={handleInputFile}
      />
    </div>
  );
}

export default UploadInput;
