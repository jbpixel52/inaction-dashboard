import React from "react";
import "./App.css";
import AppsFrame from "./components/ResponsiveGrid/appGrid";
import DynamicIcon from "./components/icons/DynamicIcon";
import SearchBox from "./components/searchbar/searchBox";
import ExampleComponent from "./components/framer-motion/ExampleComp";

function App() {
  return (
    <div className="App" id="root">
      <div className="header">
        {DynamicIcon("/", "home", "cotagge")}
        {SearchBox()}
        {ExampleComponent()}        
      </div>
      <div>{AppsFrame()}</div>
    </div>
  );
}

export default App;
