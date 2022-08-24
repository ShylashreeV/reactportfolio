import React from 'react';
import './header.css';
import CVV from './cvv';
import Me from "../../assets/Snapchat-985524192.jpg";


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="head">
          <div className="me">
            <img src={Me} alt="me" />
          </div>
          <div className="content">
            <h5>Hello I'm</h5>
            <h1>SHYLASHREE V</h1>
            <h5 className="text-light">
              Web <span>Developer</span>
            </h5>
            <CVV />
            <a href="#contact" className="scroll-down">
              Scroll Down
            </a>
          </div>
        </div>
        <p>
          Creative Front-End Developer, providing high-impact Web solutions for
          diverse industry organizations. Skilled in designing & developing
          multiple web-based application incorporating a range of technologies.
          Aspiring to combine board background with strong technical skills to
          excel as a Front End Developer.
        </p>
      </div>
    </header>
  );
}

export default header