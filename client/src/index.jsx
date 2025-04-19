import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./containers/Context/Context";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root"),
);
