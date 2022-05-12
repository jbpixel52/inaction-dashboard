import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("clock"));

export default function tick() {
  const element = <h2>It is {new Date().toLocaleTimeString()}.</h2>;
  root.render(element);
}
setInterval(tick, 1000);

