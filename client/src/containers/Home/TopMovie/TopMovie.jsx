import React, { useContext } from "react";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import ButtonAddList from "./ButtonAddList/ButtonAddList";
import BackgroundImg from "../../../components/BackgroundImg/BackgroundImg";
import { StateGlobal } from "../../Context/Context";
import s from "./TopMovie.module.css";

function TopMovie({ title, img }) {
  const { screenSize } = useContext(StateGlobal);
  return (
    <div className={s.container}>
      {screenSize.width <= 900 || screenSize.height <= 720 ? (
        <BackgroundImg src={img} />
      ) : null}
      <h4 className={s.subtitle}>
        Original de <strong>liteflix</strong>
      </h4>
      <h2 className={s.title}>{title}</h2>
      <div className={s.buttons}>
        <ButtonPlay />
        <ButtonAddList />
      </div>
    </div>
  );
}

export default TopMovie;
