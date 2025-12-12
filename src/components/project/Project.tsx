import React from "react";
import "./project.scss";

interface ProjectProps {
  title: string;
  img: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, img, link }) => {
  return (
    <div className="project">
      <div className="p_browser">
        <div className="p_circle"></div>
        <div className="p_circle"></div>
        <div className="p_circle"></div>
      </div>
      <p>{title}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={`${title} project screenshot`} className="p_img" />
      </a>
    </div>
  );
};

export default Project;
