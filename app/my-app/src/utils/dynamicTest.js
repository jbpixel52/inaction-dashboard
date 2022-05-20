import ReactDOM from "react-dom";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById("test"));

function randomNumberElement() {
  const element = <h2>Number {Math.round(Math.random() * 100)}</h2>;
  root.render(element);
  //return element;
}
setInterval(randomNumberElement, 1000);

export { randomNumberElement };
