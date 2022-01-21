import "./App.css";
import Context from "./containers/Context/Context";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Context>
        <Home />
      </Context>
    </div>
  );
}

export default App;
