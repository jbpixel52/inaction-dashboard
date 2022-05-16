import { Component } from "react";

function box(appname, appurl, description) {
  const appbox = (
    <a href={appurl} className="app">
      <p>{String(appname)}</p>
      <div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
  return appbox;
}

export default class Box extends Component {
  constructor(appname, appurl, description) {
    super();
    this.appname = appname;
    this.appurl = appurl;
    this.description = description;
  }

  render() {
    return (
      <a href={this.url} className="app">
        <p>{String(this.appname)}</p>
        <div>
          <div className="description">{this.description}</div>
        </div>
      </a>
    );
  }
}
