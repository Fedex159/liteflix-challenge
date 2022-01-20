import React from "react";
import s from "./UploadError.module.css";

function UploadError({ retryUpload }) {
  return (
    <div className={s.container}>
      <h4 className={s.title}>
        <strong>¡Error!</strong> No se puede cargar la película
      </h4>
      <div className={s.bar}></div>
      <button className={s.button} onClick={retryUpload}>
        Reintentar
      </button>
    </div>
  );
}

export default UploadError;
