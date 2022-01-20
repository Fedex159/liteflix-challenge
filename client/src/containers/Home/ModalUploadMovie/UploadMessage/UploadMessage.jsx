import React from "react";
import Logo from "../../../../components/Logo/Logo";
import cerrar from "../../../../assets/imgs/cerrar.png";
import s from "./UploadMessage.module.css";

function UploadMessage({ title, onClick }) {
  return (
    <div className={s.container}>
      <button className={s.close} onClick={onClick}>
        <img src={cerrar} alt="cerrar" />
      </button>
      <div className={s.logo}>
        <Logo />
      </div>
      <h4 className={s.title}>¡Felicitaciones!</h4>
      <h5 className={s.subtitle}>{title} fue correctamente subida.</h5>
      <button className={s.buttonHome} onClick={onClick}>
        Ir a home
      </button>
    </div>
  );
}

export default UploadMessage;
