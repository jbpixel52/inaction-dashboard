import AppCard from "../AppCards/AppCard";
import data from "../../apps.json";
import "./style.css";
import { Reorder } from "framer-motion";
import {useState} from 'react';



let boxes = data.apps.map((item, i) =>
AppCard(item.name, item.url, item.description)
);


export default function AppsFrame() {



  const [items, setItems] = useState(boxes);

  // return <div className="apps">{boxes}</div>;
  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
