import React from "react";
import "./App.css";
import { greeting, date } from "./dynamics.js";
import Clock from "./clock.js";
import AppsFrame from "./appGrid";
import { useState } from "react";

function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="App" id="root">
      <div className="header">
        {greeting()}
        {date()}
      </div>

      <AppsFrame />
    </div>
  );
}

export default App;
