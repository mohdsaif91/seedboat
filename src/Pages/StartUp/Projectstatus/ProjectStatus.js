import React from "react";

import Saved from "./Saved/Saved";
import Message from "./Message/Message";
import Overview from "./Overview/Overview";

import style from "./projectStatus.module.scss";
import globalStyle from "../../../global.module.scss";
import parentStyle from "../startUp.module.scss";

function ProjectStatus({ showTab }) {
  return (
    <div className={style.projectStatusContainer}>
      {showTab === "Overview" ? (
        <Overview />
      ) : showTab === "Saved" ? (
        <Saved />
      ) : (
        <Message />
      )}
    </div>
  );
}

export default ProjectStatus;
