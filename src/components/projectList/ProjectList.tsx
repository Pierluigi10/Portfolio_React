import React from "react";
import "./projectList.scss";
import Project from "../project/Project";
import { projectsData } from "../../data";

function ProjectList() {
  return (
    <div className="projectList">
      <div className="pl_bg"></div>
      <div className="pl_card">
        <div className="pl_texts">
          <h2 className="pl_title">Projects</h2>
        </div>
        <div className="pl_list">
          {projectsData.map((item) => (
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
