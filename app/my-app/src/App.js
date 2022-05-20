import React from "react";
import "./App.css";
import AppsFrame from "./appGrid";
import DynamicIcon from "./DynamicIcon";
import Home from "./home";
import SearchBox from "./searchBox";

function App() {
  return (
    <div className="App" id="root">
      <div className="header">
        {DynamicIcon("/", "home", "cotagge")}
        <h1>{SearchBox()}</h1>
      </div>
      <div>{AppsFrame()}</div>
    </div>
  );
}

export default App;
