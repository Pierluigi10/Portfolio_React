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
      <div className="a_right">right</div>
    </div>
  );
}

export default About;
