import React, { lazy } from 'react';

import getIcon from "../../utils/icon_extraction";
import isOnline from "../icons/isOnline";

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
      <svg width="1.5rem" height="1.5rem">
      <circle cx="0.75rem" cy="0.75rem" r="0.6rem" stroke="black" stroke-width="0.2rem" fill={isOnline(appurl)} />
      </svg>
    </a>
  );
  return appbox;
}
