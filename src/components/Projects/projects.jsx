import React from 'react';
import './projects.css';
import project1 from '../../assets/formvalidation.PNG';
import project2 from "../../assets/expensetracker.PNG";
import project3 from "../../assets/colorshades.PNG";
import project4 from '../../assets/todoapp.PNG';
import project5 from '../../assets/reactgame.PNG';

const data = [
  {
    id: 1,
    image: project1,
    title: 'Form Validation',
    github: "https://github.com/ShylashreeV/Form-Validation",
    Live: "https://formvalidation-anddisplayresult.netlify.app/",
  },
  {
    id: 2,
    image: project2,
    title: 'Expense Tracker',
    github: "https://github.com/ShylashreeV/expensetracker",
    Live: "https://expense-tracker-track.netlify.app/",
  },
  {
    id: 3,
    image: project3,
    title: 'Color Shades',
    github: "https://github.com/ShylashreeV/color-shades-generate",
    Live: "https://generate-color-shades.netlify.app/",
  },
  {
    id: 4,
    image: project4,
    title: 'Todo App',
    github: "https://github.com/ShylashreeV/todo-app-using-react",
    Live: "https://todo-react-app-using-crud.netlify.app/",
  },
  {
    id: 5,
    image: project5,
    title: 'Rock Paper Scissor Game',
    github: "https://github.com/ShylashreeV/rockpaperscissors-game-using-react",
    Live: "https://react-game-rockpaperscissors.netlify.app/",
  },
];

const projects = () => {
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="container projects_container">
        {data.map(({ id, image, title, github, Live }) => {
          return (
            <article key={id} className="project-item">
              <div className="project-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-content"></div>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={Live} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default projects