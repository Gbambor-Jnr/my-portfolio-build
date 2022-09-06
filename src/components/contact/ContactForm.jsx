import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const form = useRef();

  const sendEMail = (e) => {
    e.preventDefault();
    const data = {
      service_id: "service_4zhmvai",
      template_id: "template_a4y3ecw",
      user_id: "_d-z02LoebfTSkDwz",
      template_params: {
        username: "James",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };

    emailjs.sendForm(
      data.service_id,
      data.template_id,
      form.current,
      data.user_id
    );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEMail}>
      <input type="text" placeholder="Your full name" name="name" required />
      <input
        type="email"
        placeholder="enter your email"
        name="email"
        required
      />
      <textarea
        id=""
        placeholder=" your message"
        rows="7"
        name="message"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
