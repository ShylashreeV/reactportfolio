import React from 'react';
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


const footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Web <span>Developing</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/shyla-shree-42860a185/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/ShylashreeV" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/beauty_full_shy/" target="_blank">
          <BsInstagram />
        </a>
        <a href="">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer-copyright">
        <small>
          &copy; Shylashree <span>Web Developer</span>. All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default footer