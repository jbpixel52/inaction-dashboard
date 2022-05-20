import React from "react";
import "./App.css";
import AppsFrame from "./components/ResponsiveGrid/appGrid";
import DynamicIcon from "./components/icons/DynamicIcon";
import Home from "./components/icons/home";
import SearchBox from "./components/searchbar/searchBox";

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
