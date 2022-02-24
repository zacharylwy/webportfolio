import React from "react";
import "./intro.css";
import me2 from "../../img/me2.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is </h2>
          <h1 className="i-name">Zachary Lau</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">UI/UX</div>
              <div className="i-title-item">Software Newbie</div>
            </div>
          </div>
          <p className="i-description">
            I am an undergraduate Computer Science student in NUS aspiring to
            dive into the world of web development to create stylish websites,
            apps and platforms. While school is eating away at my energy, I am
            in search for my next opportunity that will grant me a fulfilling
            experience to hone my skills in the art of web/mobile development.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me2} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
