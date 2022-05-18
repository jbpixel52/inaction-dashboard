import getIcon from "./icon_extraction";
import isOnline from "./isOnline";
export default function box(appname, appurl, description) {
  const appbox = (
    <a href={appurl} className="app">
      <img
        src={getIcon(appname.toLowerCase())}
        alt="../public/favicon.ico"
        className="icons"
      ></img>
      <div className="appTitleRow">
        <p className="appName">{appname}</p>
        <div className="description">{description}</div>
      </div>
      <svg width="1rem" height="1rem">
      <circle cx="0.5rem" cy="0.5rem" r="0.4rem" stroke="black" stroke-width="3" fill={isOnline(appurl)} />
      </svg>
    </a>
  );
  return appbox;
}
