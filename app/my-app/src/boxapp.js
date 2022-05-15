import { Component } from "react";

function box(appname, appurl, description) {
  const appbox = (
    <a href={appurl} class="app">
      <p>{String(appname)}</p>
      <div>
        <div class="description">{description}</div>
      </div>
    </a>
  );
  return appbox;
}

export default class Box extends Component {
  constructor(appname,appurl,description){
    this.appname=appname;
    this.appurl=appurl;
    this.description=description;
  }

  render() {
    return box(this.appname,this.appurl,this.description);
  }
}
