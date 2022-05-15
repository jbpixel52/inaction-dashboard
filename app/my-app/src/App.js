import React from 'react';
import "./App.css";
import { greeting, date } from "./dynamics.js";
import { box } from "./boxapp.js";
import Clock from "./clock.js";
//import { randomNumberElement } from "./dynamicTest.js";
import AppsFrame from './appGrid';

function App() {
  return (
    <div className="App" id="root">
      <div className="header">
        {greeting()}
        {date()}
        <Clock/>
      </div>

      <div className="apps" id="boxes">
      <AppsFrame/>
      </div>
      
      <div id="test"></div>
    </div>
  );
}

export default App;