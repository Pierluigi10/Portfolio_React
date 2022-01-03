import React from "react";
import "./contact.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <div className="c_bg"></div>
      <div className="c_wrapper">
        <div className="c_left">
          <h2 className="c_title"> Let's discuss your project</h2>
          <div className="c_info">
            <div className="c_info_item">
              <a
                href="mailto:pierluigibaiano@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineEmail className="c_icon" />
              </a>
            </div>
            <div className="c_info_item">
              <a
                href="https://github.com/Pierluigi10"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="c_icon" />
              </a>
            </div>
            <div className="c_info_item">
              <a
                href="https://www.linkedin.com/in/pierluigi-baiano/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="c_icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="c_right"></div>
      </div>
    </div>
  );
}

export default Contact;
