import React from "react";
import { useTranslation } from "react-i18next";
import "./projectList.scss";
import Project from "../project/Project";
import { projectsData } from "../../data";

function ProjectList() {
  const { t } = useTranslation();

  return (
    <section className="projectList" aria-labelledby="projects-title">
      <div className="pl_bg"></div>
      <div className="pl_card">
        <div className="pl_texts">
          <h2 id="projects-title" className="pl_title">{t("projects.title")}</h2>
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
    </section>
  );
}

export default ProjectList;
