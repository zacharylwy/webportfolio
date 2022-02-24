import "./about.css";
import Procreate from "../../../img/procreate.png";
import Figma from "../../../img/figma.png";
import me3 from "../../../img/me3.JPG";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me3} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Slowly growing a strong passion for web and mobile app development.
        </p>
        <p className="a-programming">
          <u>Programming Languages</u>
        </p>
        <p className="a-prog-desc">Java, Python, C, HTML, CSS, JavaScript</p>
        <p className="a-tools">
          <u>Design Tools:</u>
        </p>
        <div className="a-procreate">
          <img src={Procreate} alt="" className="a-procreate-img" />
          <div className="a-procreate-texts">
            <h4 className="a-procreate-title">Procreate</h4>
            <p className="a-tool-skill">Proficient</p>
            <p className="a-procreate-desc">
              Used for digital design of logos, art pieces, backgrounds and
              icons.
            </p>
          </div>
        </div>
        <div className="a-figma">
          <img src={Figma} alt="" className="a-figma-img" />
          <div className="a-figma-texts">
            <h4 className="a-figma-title">Figma</h4>
            <p className="a-tool-skill">Beginner</p>
            <p className="a-figma-desc">
              Helps me visualise how I want my website/mobile app to look like.
              (Beginner)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
