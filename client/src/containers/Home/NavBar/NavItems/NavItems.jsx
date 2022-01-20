import React from "react";
import Notificación from "../../../../assets/imgs/Notificación.png";
import Perfil from "../../../../assets/imgs/Perfil.png";
import MenuIcon from "../../../../components/MenuIcon/MenuIcon";
import s from "./NavItems.module.css";

function NavItems() {
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <MenuIcon />
      </div>
      <img className={s.notificacion} src={Notificación} alt="Notificación" />
      <img className={s.perfil} src={Perfil} alt="Perfil" />
    </div>
  );
}

export default NavItems;
