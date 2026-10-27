import { Container } from "./styles";
import sandeepyadav from "../../assets/sandeep.webp";
import python from "../../assets/python.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import postman from "../../assets/postman.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import reactNativeIcon from "../../assets/react-native-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Sandeep Yadav, a Full-stack & Mobile App Developer skilled in building scalable, user-centric applications using React, React Native, Node.js, and MySQL. Experienced in agile development environments with a strong focus on clean code, performance, and usability.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Passionate about continuous learning and exploring AI and Machine Learning to leverage modern technologies and deliver high-quality digital solutions.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Let’s work together to build innovative solutions that prioritize safety and user experience!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={jsIcon} alt="" />
              <span>JavaScript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={typescriptIcon} alt="" />
              <span>TypeScript</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={reactIcon} alt="" />
              <span>React</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={reactNativeIcon} alt="" />
              <span>React Native</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={nodeIcon} alt="" />
              <span>Node.js</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={mysqlIcon} alt="" />
              <span>MySQL</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={python} alt="" />
              <span>Python</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={gitIcon} alt="" />
              <span>Git</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.26 * 1000}>
              <img src={githubIcon} alt="" />
              <span>GitHub</span>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.28 * 1000}>
              <img src={postman} alt="" />
              <span>Postman</span>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={sandeepyadav} alt="sandeepyadav" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
