import React from "react";
import "./App.css";
import {greeting} from "./dynamics.js";
//import Clock from "./clock.js";
import AppsFrame from "./appGrid";
import SearchBox from "./searchBox";

function App() {
  return (
    <div className="App" id="root">
    <div classn></div>
      <div className="header"><h1>{SearchBox()}</h1></div>
      <div>{AppsFrame()}</div>
    
    </div>
  );
}

export default App;
