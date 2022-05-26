import React from "react";

import getIcon from "../../utils/icon_extraction";
import isOnline from "../../utils/isOnline";
import "./style.css";
import { motion } from "framer-motion";

export default function AppCard(appname, appurl, description, apptype) {
  const Card = (
    <div div className="card-base">
      <div className="rows">
        <div className="nav-tab">
          <button className="columns">Simple</button>
          <button className="columns">Extended</button>
        </div>
        <hr></hr>
        <div className="header-row">
          <img
            src={getIcon(appname.toLowerCase(), apptype, appurl)}
            alt=""
            className="app-icon"
          ></img>
          <a className="title-body" href={appurl}>
            <div className="title-div">
              <p className="app-title">{appname}</p>
              <svg width="1rem" height="1rem">
                <circle
                  cx="0.5rem"
                  cy="0.5rem"
                  r="0.4rem"
                  stroke="black"
                  stroke-width="0.1rem"
                  fill={isOnline(appurl)}
                />
              </svg>
            </div>
            <p className="app-description">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
  return Card;
  // return appbox;
}
