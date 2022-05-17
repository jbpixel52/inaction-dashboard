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
  constructor(props) {
    super();
    this.appname = props.appname;
    this.appurl = props.appurl;
    this.description = props.description;
    console.log(props.appname)
  }
  render() {
   
    return (
      <a href={this.url} className="app">
        <p>{this.appname}</p>
        <div>
          <div className="description">{JSON.stringify(this.description)}</div>
        </div>
      </a>
    );
  }
}
