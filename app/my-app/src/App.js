import React from "react";
import "./App.css";
import AppsFrame from "./components/ResponsiveGrid/appGrid";
import DynamicIcon from "./components/icons/DynamicIcon";
import SearchBox from "./components/searchbar/searchBox";
import ExampleComponent from "./components/framer-motion/ExampleComp";
// /* {DynamicIcon("/", "home", "cotagge")} */
function App() {
  return (
    <div className="App" id="root">
      <div className="header">
        {SearchBox()}
      </div>
      <div>{AppsFrame()}</div>
    </div>
  );
}

export default App;
