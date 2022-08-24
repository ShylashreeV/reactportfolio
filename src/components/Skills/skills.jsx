import React from 'react';
import './skills.css';
import {AiFillCheckCircle} from 'react-icons/ai';

const skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>
        My <span>Skills</span>
      </h2>

      <div className=" container skills_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Hypertext Markup Language</small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Cascading Style Sheet</small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Light-weight OOP Language</small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">
                  Free, Open-source Javascript Library
                </small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">
                  Open-source Javascript Library
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">
                  open-source, cross-platform JavaScript runtime environment
                </small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>Express.Js</h4>
                <small className="text-light">
                  free and open-source web application framework
                </small>
              </div>
            </article>
            <article className="skill-details">
              <AiFillCheckCircle className="skill-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">
                  open-source document-oriented database
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills