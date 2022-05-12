import React from 'react';
import ReactDOM from "react-dom";
import "./App.css";
import { greeting, date } from "./dynamics.js";
import { box } from "./boxapp.js";
import { tick } from "./clock.js";
import { randomNumberElement } from "./dynamicTest.js";

function App() {
  return (
    <div className="App" id="root">
      <div className="header">
        {greeting()}
        {date()}
        <div id="clock"></div>
      </div>

      <div className="boxes" id="boxes">
        {box("Dashboard", "https://dashboard.jbpixel.xyz", "LOREM IPSUM")}
        {box("Sonarr", "https://sonarr.jbpixel.xyz", "LOREM IPSUM")}
      </div>
      <div id="test"></div>
    </div>
  );
}

export default App;