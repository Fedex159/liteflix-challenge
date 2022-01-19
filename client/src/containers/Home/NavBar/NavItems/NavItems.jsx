import React from "react";
import Menu from "../../../../assets/imgs/Menú.png";
import Notificación from "../../../../assets/imgs/Notificación.png";
import Perfil from "../../../../assets/imgs/Perfil.png";
import s from "./NavItems.module.css";

function NavItems() {
  return (
    <div className={s.container}>
      <img className={s.menu} src={Menu} alt="Menu" />
      <img className={s.notificacion} src={Notificación} alt="Notificación" />
      <img className={s.perfil} src={Perfil} alt="Perfil" />
    </div>
  );
}

export default NavItems;
