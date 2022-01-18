import React from "react";
import s from "./UploadProgress.module.css";

function UploadProgress({ uploadPercentage, cancelUpload }) {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Cargando {uploadPercentage}%</h4>
      <div className={s.barOff}>
        <div
          className={s.barOn}
          style={{ width: `${uploadPercentage}%` }}
        ></div>
      </div>
      {uploadPercentage === 100 ? (
        <h4 className={s.ready}>¡LISTO!</h4>
      ) : (
        <button className={s.button} onClick={() => cancelUpload()}>
          Cancelar
        </button>
      )}
    </div>
  );
}

export default UploadProgress;
