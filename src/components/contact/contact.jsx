import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_abcv3wb",
      "template_3lq66sm",
      form.current,
      "mlnyuopjqc8Fp8q9I"
    )

    e.target.reset()
      
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>
        Contact <span>Me</span>
      </h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail contact-option-icon />
            <h4>Email</h4>
            <h5>shylashree74@gmail.com</h5>
            <a href="mailto:shylashree74@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9916280741</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919916280741"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="?"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;