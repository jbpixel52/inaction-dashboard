import React from "react";
import "./App.css";
import AppsFrame from "./components/ResponsiveGrid/appGrid";
import SearchBox from "./components/searchbar/searchBox";
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
