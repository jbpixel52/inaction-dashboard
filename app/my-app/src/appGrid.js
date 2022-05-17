import React, { Component } from "react";

import Box from "./boxapp";
import data from "./apps.json";

export default class AppsFrame extends Component {
  constructor() {
    super();
    this.data = data;
    this.boxes = this.data.apps.map((item, i) => (
      <Box
        appname={item.name}
        appurl={item.url}
        description={item.description}
          
        />
    ));
    this.elements = this.boxes.copyWithin();
  }
  render() {
    return <div className="apps">{this.elements}</div>;
  }
}
