import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>REACT AND REDUX</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>REACT-TYPESCRIPT</h4>
                <small className="text-light">Knowledgeable</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Git and Firebase </h4>
                <small className="text-light">Knowledgeable</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>NEXT</h4>
                <small className="text-light">ADVANCED BEGGINER</small>
              </div>
            </article> */}

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>NODE JS And REST API</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>EXPRESS JS AND MONGO DB</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Server Side Rendering with Pug/ejs</h4>
                <small className="text-light">PROFICIENT</small>
              </div>
            </article>
          </div>
        </div>
        {/* ================END OF FRONT END DEVPT.================  */}

        {/* <div className="experience__backend">
          <h3>BACK END DEVELOPMENT</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>NODE</h4>
              <small className="text-light">PROFICIENT</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>PYTHON</h4>
              <small className="text-light">PROFICIENT</small>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Experience;
