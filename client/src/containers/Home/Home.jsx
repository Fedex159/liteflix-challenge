import React, { useState, useEffect, useRef, useContext } from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import ModalUploadMovie from "./ModalUploadMovie/ModalUploadMovie";
import { StateGlobal } from "../Context/Context";
import s from "./Home.module.css";

function Home() {
  const ref = useRef(null);
  const { handleModal, topMovie, popularMovies, myMovies, showModal, option } =
    useContext(StateGlobal);
  const [img, setImg] = useState(null);
  const [imageSize, setImageSize] = useState(100);

  // url image
  useEffect(() => {
    if (Object.keys(topMovie).length) {
      const img = new Image();
      img.src = topMovie.img;
      setImg(img);
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

  // For animation background
  useEffect(() => {
    if (ref.current && img) {
      const handleResize = () => {
        const topMoviesRef = ref.current.children[1].children[0];

        const width =
          ref.current.clientWidth > 900
            ? ref.current.clientWidth
            : topMoviesRef.clientWidth;
        const height =
          width > 900 ? ref.current.clientHeight : topMoviesRef.clientHeight;

        const ratio = width / height;

        if (ratio < 16 / 9) {
          setImageSize(Math.ceil(((16 / 9) * 100) / ratio));
        } else {
          setImageSize(100);
        }
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [ref, img]);

  return (
    <div
      ref={ref}
      className={s.container}
      style={{
        "--url": `url(${topMovie.img})`,
        "--size": `${imageSize}%`,
        backgroundSize: `${imageSize}%`,
      }}
    >
      <NavBar />
      <div className={s.movies}>
        <TopMovie title={topMovie.title} />
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
