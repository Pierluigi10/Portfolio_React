import React from "react";
import "./intro.scss";
import Me from "../../images/me.png"

function intro() {
  return (
    <div className="intro">
      <div className="i_left">
        <div className="i_left_wrapper">
          <h2 className="i_intro">Hello, my name is</h2>
          <h1 className="i_name">Pierluigi</h1>
          <div className="i_title">
            <div className="i_title_wrapper">
              <div className="i_title_item">Web Developer</div>
              <div className="i_title_item">Frontend</div>
              <div className="i_title_item">Backend</div>
            </div>
          </div>
          <div className="i_description">
            Full-Stack Webdeveloper and Quality Assurance Analyst. Graduated in
            political science and currently participating in a one-year
            full-time training including technologies of the MERN stack.
          </div>
        </div>
      </div>
      <div className="i_right">
          <div className="i_bg"></div>
          <img src={Me} alt="" className="i_img" />
      </div>
    </div>
  );
}

export default intro;
