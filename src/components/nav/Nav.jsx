import React, { useState } from "react";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
// import { BsBookHalf } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
// import { RiMessage3Fill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import "./Nav.css";

function Nav() {
  const [active, setActive] = useState("#");
  const clickHandler = () => {
    setActive("#");
  };
  const clickHandlerAbout = () => {
    setActive("#about");
  };
  const clickHandlerExperience = () => {
    setActive("#experience");
  };
  const clickHandlerContact = () => {
    setActive("#about");
  };
  const clickHandlerServices = () => {
    setActive("#services");
  };

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={clickHandler}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={clickHandlerAbout}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={clickHandlerExperience}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={active === "#contact" ? "active" : ""}
        onClick={clickHandlerContact}
      >
        <FaBookReader />
      </a>
      <a
        href="#contact"
        className={active === "#services" ? "active" : ""}
        onClick={clickHandlerServices}
      >
        <BiPhoneCall />
      </a>
    </nav>
  );
}

export default Nav;
