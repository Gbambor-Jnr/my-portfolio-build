import React from "react";
import CTA from "./CTA";
// import Me from "../../assets/img1.JPG";
// import Me2 from "../../assets/img01.JPG";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Cornelius Okeke</h1>
        <h5>A Junior FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src="" alt="me" />
        </div> */}
        <a href="#contact" className="scroll__down">
          scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
