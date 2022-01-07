import React, { useContext, useRef, useState } from "react";
import "./contact.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { init } from "@emailjs/browser";
init(process.env.REACT_APP_USER_ID);

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
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
            <strong> What's your story? </strong>Get in touch. Always available
            for new challenges if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required={true}
            ></textarea>
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
