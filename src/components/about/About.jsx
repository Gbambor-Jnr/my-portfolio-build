import React from "react";
// import me from "../../assets/img1.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image"> */}
        {/* <img src={me} alt="about me" /> */}
        {/* </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Summary</h5>
              <small>team player, goal oriented and a quick learner</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Personal Projects</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed personal Projects</small>
            </article>
          </div>
          <p>
            my name is Cornelius Okeke, a master student at HTW Dresden and a
            self-taught Javascript developer (React and Node Js).
            web-development has always been my passion and I try to develop and
            get better every chance I get. I would love the opportunity to
            intern/work with you and if you are looking for an eager and
            innovative new guy in tech who is willing to learn and adapt new
            technologies, I am your guy and so...
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
