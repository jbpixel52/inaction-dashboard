import React from "react";

import getIcon from "../../utils/icon_extraction";
import isOnline from "../../utils/isOnline";
import "./style.css";
export default function AppCard(appname, appurl, description) {
  const Card = (
    <div className="card-base">
      <div className="rows">
        <div className="nav-tab">
          <button className="columns">Simple</button>
          <button className="columns">Extended</button>
          <button className="columns">Debug</button>

          
        </div>
        <hr></hr>
        <div className="header-row">
        <img
            src={getIcon(appname.toLowerCase())}
            alt="../public/favicon.ico"
            className="app-icon"
          ></img>
          <div className="title-body">
            <div className="title-div">
              <p className="app-title">{appname}</p>
              <svg width="1.5rem" height="1.5rem">
                <circle
                  cx="0.75rem"
                  cy="0.75rem"
                  r="0.6rem"
                  stroke="black"
                  stroke-width="0.2rem"
                  fill={isOnline(appurl)}
                />
              </svg>
            </div>
            <p className="app-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
  return Card;
  // return appbox;
}
