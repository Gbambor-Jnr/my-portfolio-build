import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import "./Contact.css";
function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon text-light" />
            <h4 className="text-light">Email</h4>
            <h5 className="text-light">ikennacornelius@gmail.com</h5>
            <a href="mailto:corneliusokeke@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillTwitterSquare className="contact__option-icon text-light" />
            <h4 className="text-light">Twitter</h4>
            <h5 className="text-light">@gbambor_Jnr</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1542693259"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon text-light" />
            <h4 className="text-light">WhatsApp</h4>
            <h5 className="text-light">+15906843898</h5>
            <a
              href="https://api.whatsapp.com/send?phone=4915906843898"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
