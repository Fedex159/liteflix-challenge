import React, { useState, useEffect, createContext } from "react";
import { getMovies } from "../../utils/index";

export const StateGlobal = createContext("Default value");
export const options = ["Populares", "Mis películas"];

function Context({ children }) {
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

  return (
    <div className="context">
      <StateGlobal.Provider
        value={{
          topMovie,
          popularMovies,
          myMovies,
          setMyMovies,
          option,
          setOption,
          showModal,
          handleModal,
        }}
      >
        {children}
      </StateGlobal.Provider>
    </div>
  );
}

export default Context;
