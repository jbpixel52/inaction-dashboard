import React from "react";
import "./App.css";
//import Clock from "./clock.js";
import AppsFrame from "./appGrid";
import Home from "./home";
import SearchBox from "./searchBox";
import Settings from "./settings";

function App() {
  return (
    <div className="App" id="root">
      <div classn></div>
      <div className="header">
      {Home()}
              <h1>{SearchBox()}</h1>
        {Settings()}
            </div>
      <div>{AppsFrame()}</div>
    </div>
  );
}

export default App;
