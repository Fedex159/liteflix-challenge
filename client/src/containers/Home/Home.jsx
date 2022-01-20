import React, { useState, useEffect, createContext, useRef } from "react";
import NavBar from "./NavBar/NavBar";
import TopMovie from "./TopMovie/TopMovie";
import MoviesContainer from "./MoviesContainer/MoviesContainer";
import ModalUploadMovie from "./ModalUploadMovie/ModalUploadMovie";
import { getMovies } from "../../utils";
import s from "./Home.module.css";

export const StateGlobal = createContext("Default value");
export const options = ["Populares", "Mis películas"];

function Home() {
  const ref = useRef(null);
  const [topMovie, setTopMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [option, setOption] = useState(options[0]);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    // Top movie
    getMovies("now_playing")
      .then((data) => setTopMovie(data))
      .catch((e) => console.log("now_playing", e));

    // Popular movies
    getMovies("popular")
      .then((data) => setPopularMovies(data))
      .catch((e) => console.log("popular", e));

    // My Movies
    getMovies("db")
      .then((data) => setMyMovies(data))
      .catch((e) => console.log("my movies", e));
  }, []);

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
    <StateGlobal.Provider
      value={{
        popularMovies,
        myMovies,
        setMyMovies,
        option,
        setOption,
        showModal,
        handleModal,
      }}
    >
      <div
        ref={ref}
        className={s.container}
        style={{ "--url": `url(${topMovie.img})` }}
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
    </StateGlobal.Provider>
  );
}

export default Home;
