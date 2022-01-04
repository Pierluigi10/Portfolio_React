import React from "react";
import "./projectList.scss";
import Project from "../Project/Project.js";
import { projects } from "../../data.js";

function ProjectList() {
  return (
    <div className="projectList">
      <div className="pl_bg"></div>
      <div className="pl_card">
        <div className="pl_texts">
          <h2 className="pl_title">Works</h2>
          <p className="pl_description">just some projects</p>
        </div>
        <div className="pl_list">
          {projects.map((item) => (
            <Project
              key={item.id}
              title={item.title}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
