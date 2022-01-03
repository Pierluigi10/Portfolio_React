import React from "react";
import "./about.scss";
import codeGlasses from "../../images/codeglasses.png";

function About() {
  return (
    <div className="about">
      <div className="a_left">
        <div className="a_card bg"></div>
        <div className="a_card">
          <img src={codeGlasses} alt="" className="a_img" />
        </div>
      </div>
      <div className="a_right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Full-Stack Webdeveloper and Quality Assurance Analyst.
        </p>
        <p className="a-description">
          Graduated in political science and currently participating in a
          one-year full-time training including technologies of the MERN stack.
        </p>
      </div>
    </div>
  );
}

export default About;
