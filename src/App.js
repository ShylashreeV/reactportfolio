import React from 'react';
import Header from './components/header/header';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Education from './components/Education/education';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from "./components/contact/contact";
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App