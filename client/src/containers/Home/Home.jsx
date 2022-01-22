import React, { useEffect, useRef, useContext } from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import ModalUploadMovie from "./ModalUploadMovie/ModalUploadMovie";
import { StateGlobal } from "../Context/Context";
import start from "../../assets/sounds/start.mp3";
import BackgroundImg from "../../components/BackgroundImg/BackgroundImg";
import s from "./Home.module.css";

function Home() {
  const ref = useRef(null);
  const {
    handleModal,
    topMovie,
    popularMovies,
    myMovies,
    showModal,
    option,
    screenSize,
  } = useContext(StateGlobal);

  // Play sound when load
  useEffect(() => {
    if (Object.keys(topMovie).length) {
      const audio = new Audio(start);
      audio.play();
    }
  }, [topMovie]);

  // Disable scroll when modal is open
  useEffect(() => {
    if (ref.current) {
      const body = ref.current.offsetParent;
      if (showModal) {
        body.classList.add("disableScroll");
      } else {
        body.classList.remove("disableScroll");
      }
    }
  }, [ref, showModal]);

  return (
    <div ref={ref} className={s.container}>
      {screenSize.width > 900 && screenSize.height > 720 ? (
        <BackgroundImg src={topMovie.img} />
      ) : null}
      <NavBar />
      <div className={s.movies}>
        <TopMovie title={topMovie.title} img={topMovie.img} />
        {option === "Populares" ? (
          <MoviesContainer movies={popularMovies} />
        ) : (
          <MoviesContainer movies={myMovies} />
        )}
      </div>
      {showModal ? <ModalUploadMovie handleModal={handleModal} /> : null}
    </div>
  );
}

export default Home;
