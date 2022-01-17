import React from "react";
import NavBar from "./NavBar/NavBar";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.container}>
      <NavBar />
    </div>
  );
}

export default Home;
