import React from "react";
import "./projectList.scss";
import Project from "../Project/Project.js";

function ProjectList() {
  return (
    <div className="projectList">
      <div className="pl_texts">
        <h2 className="pl_title">Works</h2>
        <p className="pl_description">just some projects</p>
      </div>
      <div className="pl_list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default ProjectList;
