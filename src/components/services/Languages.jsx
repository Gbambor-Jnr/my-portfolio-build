import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Languages.css";

function Languages() {
  return (
    <section id="services">
      <h5>Languages I Speak</h5>
      <h2>Languages</h2>
      <div className="container language__container">
        <div className="language__action">
          <article className="languages">
            <BsFillPatchCheckFill className="language__icon" />
            <div className="language__head">
              <h4>English</h4>
              <small className="text-light">PROFICIENT</small>
            </div>
          </article>
        </div>

        <div className="language__action">
          {/* <div>
            <h3>Native Languages</h3>
          </div>
          <article className="languages">
            <BsFillPatchCheckFill className="language__icon" />
            <div className="language__head">
              <h4>Igbo</h4>
              <small className="text-light">PROFICIENT</small>
            </div>
          </article>
          <article className="languages">
            <BsFillPatchCheckFill className="language__icon" />
            <div className="language__head">
              <h4>Efik</h4>
              <small className="text-light">PROFICIENT</small>
            </div>
          </article>
          <article className="languages">
            <BsFillPatchCheckFill className="language__icon" />
            <div className="language__head">
              <h4>Ibibio</h4>
              <small className="text-light">PROFICIENT</small>
            </div>
          </article> */}
          <article className="languages">
            <BsFillPatchCheckFill className="language__icon" />
            <div className="language__head">
              <h4>German</h4>
              <small className="text-light">A2</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Languages;
