import React from "react";
import "./project.scss";

function Project(props) {
  const { title, img, link } = props;
  return (
    <div className="project">
      <div className="p_browser">
        <div className="p_circle"></div>
        <div className="p_circle"></div>
        <div className="p_circle"></div>
      </div>
      <hp> {title}</hp>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p_img" />
      </a>
    </div>
  );
}

export default Project;
