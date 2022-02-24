import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p63c1h2",
        "template_3p3iced",
        formRef.current,
        "user_1UJrCyxfVbD4LRf9NLUci"
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
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Reach out to me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +65 9139 2549
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              zacharylau1303@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Singapore
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Got something to tell me?</b> Get in touch, leave some feedback,
            or just say hi! If I haven't responded from a message you left, drop
            me a text!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Drop me a message"
              name="message"
            />
            <button>Submit</button>
            {done &&
              " Thank you for your message! Now let's hope I read my email..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
