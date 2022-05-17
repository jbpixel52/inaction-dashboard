import getIcon from "./icon_extraction";
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

        <div>
          <div className="description">{description}</div>
        </div>
      </div>
    </a>
  );
  return appbox;
}
