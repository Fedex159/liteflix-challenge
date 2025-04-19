import React, { useContext } from "react";
import Home from "./containers/Home/Home";
import Loading from "./components/Loading/Loading";
import { StateGlobal } from "./containers/Context/Context";
import "./App.css";

function App() {
  const { isLoading } = useContext(StateGlobal);
  return <div className="App">{isLoading ? <Loading /> : <Home />}</div>;
}

export default App;
