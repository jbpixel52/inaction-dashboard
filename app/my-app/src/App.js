import React from "react";
import "./App.css";
import {greeting} from "./dynamics.js";
//import Clock from "./clock.js";
import AppsFrame from "./appGrid";

function App() {
  return (
    <div className="App" id="root">
      <div className="header">{greeting()}</div>
      <div>{AppsFrame()}</div>
    
    </div>
  );
}

export default App;
