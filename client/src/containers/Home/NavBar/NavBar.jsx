import React from "react";
import Logo from "../../../components/Logo/Logo";
import AddMovie from "./AddMovie/AddMovie";
import NavItems from "./NavItems/NavItems";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={s.container}>
      <Logo />
      <AddMovie />
      <NavItems />
    </div>
  );
}

export default NavBar;
