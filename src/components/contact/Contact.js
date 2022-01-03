import React, { useRef, useState } from "react";
import "./contact.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c_bg"></div>
      <div className="c_wrapper">
        <div className="c_left">
          <h2 className="c_title"> Contact me!</h2>
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
        <div className="c_right">
          <p className="c-description">
            What's your story? Get in touch. Always available for for new
            challenges if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea placeholder="Message" name="message" rows="5"></textarea>
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
