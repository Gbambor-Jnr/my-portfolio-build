import React from "react";
import "./Footer.css";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Gbambor_JNR
      </a>

      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Gbambor-Jnr" target="_blank">
          <AiFillGithub className="footer__socials_icons " />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank">
          <AiOutlineWhatsApp className="footer__socials_icons" />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <AiOutlineTwitter className="footer__socials_icons " />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gbambor_JNR. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
