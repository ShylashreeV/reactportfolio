import React from 'react';
import './education.css';
import { FaUserGraduate } from "react-icons/fa";

const education = () => {
  return (
    <section id="education">
      <h5>I have Qualified</h5>
      <h2>
        My <span>Education</span>
      </h2>

      <div className="container education_container">
        <article className="education">
          <div className="education_head">
            <div>
              <FaUserGraduate />
            </div>
            <h3>Full Stack Development</h3>
            <h5>2022</h5>
          </div>
          <p>Skill Safari</p>
          <p>@Coimabtore</p>
        </article>
        <article className="education">
          <div className="education_head">
            <div>
              <FaUserGraduate />
            </div>
            <h3>Master of Computer Application</h3>
            <h5>2021</h5>
          </div>
          <p>Sambhram Academy of Management Studies</p>
          <p>@Bangalore</p>
        </article>
        <article className="education">
          <div className="education_head">
            <div>
              <FaUserGraduate />
            </div>
            <h3>Bachelor of Science</h3>

            <h5>2017</h5>
          </div>
          <p>Government First Grade College</p>
          <p>@Bangalore</p>
        </article>
      </div>
    </section>
  );
}

export default education