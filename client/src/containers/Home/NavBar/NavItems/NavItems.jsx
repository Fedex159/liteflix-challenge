import React from "react";
import Menu from "../../../../assets/imgs/Menú.png";
import Notificación from "../../../../assets/imgs/Notificación.png";
import Perfil from "../../../../assets/imgs/Perfil.png";
import s from "./NavItems.module.css";

function NavItems() {
  return (
    <div className={s.container}>
      <img src={Menu} alt="Menu" />
      <img src={Notificación} alt="Notificación" />
      <img src={Perfil} alt="Perfil" />
    </div>
  );
}

export default NavItems;
