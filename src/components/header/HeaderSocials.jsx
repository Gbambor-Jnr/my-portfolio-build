import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a href="https://linked.com" target="blank">
        <BsLinkedin />
      </a> */}
      <a href="https://github.com/Gbambor-Jnr" target="blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Gbambor_Jnr" target="blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
