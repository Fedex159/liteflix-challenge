import React from "react";
import Logo from "../../../components/Logo/Logo";
import AddMovie from "./AddMovie/AddMovie";
import NavItems from "./NavItems/NavItems";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Logo />
        <AddMovie />
        <NavItems />
      </div>
    </div>
  );
}

export default NavBar;
