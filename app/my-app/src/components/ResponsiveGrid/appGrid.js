import AppCard from "../AppCards/AppCard";
import data from "../../apps.json";
import "./style.css";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function AppsFrame() {
  let boxes = data.apps.map((item, i) =>
    AppCard(item.name, item.url, item.description)
  );

  console.log(boxes);

  const [items, setItems] = useState(() => 'idk');
  // return <div className="apps">{boxes}</div>;
  return (<div className="apps">{boxes}</div>
  );
}
