import AppCard from "../AppCards/AppCard";
import data from "../../apps.json";
import './style.css'
import { useState } from "react";

export default function AppsFrame() {
  let boxes = data.apps.map((item, i) =>
    AppCard(item.name, item.url, item.description, item.type)
  );
  const [items, setItems] = useState(() => 'idk');
  return (<div className='AppGrid'>{boxes}</div>

  );
}
