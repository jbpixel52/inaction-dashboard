
import AppCard from "../AppCards/AppCard";
import data from "../../apps.json";
import './style.css'


export default function AppsFrame() {
  let boxes = data.apps.map((item, i) =>
    AppCard(item.name, item.url, item.description)
  );
  console.log(boxes)
  return <div className="apps">{boxes}</div>;
}
