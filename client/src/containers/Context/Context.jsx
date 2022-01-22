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
  const [isLoading, setIsLoading] = useState(true);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Manage screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Enable loading
  useEffect(() => {
    if (Object.keys(topMovie).length && popularMovies.length) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [topMovie, popularMovies, myMovies]);

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
          isLoading,
          topMovie,
          popularMovies,
          myMovies,
          setMyMovies,
          option,
          setOption,
          showModal,
          handleModal,
          screenSize,
        }}
      >
        {children}
      </StateGlobal.Provider>
    </div>
  );
}

export default Context;
