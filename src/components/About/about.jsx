import React from 'react';
import './about.css';
import ME from '../../assets/about.png';
import { FaUserGraduate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>
        About <span>Me</span>
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about_icon" />
              <h5>Education </h5>
              <small>qualification</small>
            </article>
            <article className="about__card">
              <GiSkills className="about_icon" />
              <h5>Skills</h5>
              <small>Well known</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>

          
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about