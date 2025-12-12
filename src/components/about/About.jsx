import React from "react";
import "./about.scss";
import codeGlasses from "../../images/codeglasses.png";

function About() {
  return (
    <div className="about">
      <div className="a_left">
        <div className="a_card">
          <img src={codeGlasses} alt="codeGlasses" className="a_img" />
        </div>
      </div>
      <div className="a_right">
        <h2 className="a_title">About Me</h2>
        <p className="a_sub">
          Full Stack Web Developer and Quality Assurance Analyst.
        </p>
        <p className="a_description">
          I have completed a one-year full-time training in modern web development.
          In my drawer I keep a degree in Political Science.
        </p>
        <p className="a_language">
          HTML5 || CSS || SASS || JavaScript || TypeScript || React.js || Next.js ||
          Astro || Node.js || NestJS || Express
        </p>
      </div>
    </div>
  );
}

export default About;
