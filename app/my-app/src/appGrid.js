import React, { Component } from "react";

import box from "./boxapp";
import data from "./apps.json";

export default class AppsFrame extends Component {
  render() {
    return (
      <div>
        {data.apps.map((item, i) => (
          <a href={item.url} class="app">
            <p>{String(item.name)}</p>
            <div>
              <div class="description">{item.description}</div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

// function yamlParser(path) {
//   try {
//     const doc = yaml.load(fs.readFileSync(path, "utf8"));
//     console.log(doc);
//     return doc
//   } catch (e) {
//     console.log(e);
//   }
// }
