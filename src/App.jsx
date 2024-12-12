import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Experiences from './components/Experiences';
import SkillCard from './components/SkillCard';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div >
        <Header />
        <div id="experiences" >
          <Experiences />
        </div>
        <div id="projects" >
          <ProjectCard />
        </div>
        <div id="skills" >
          <SkillCard />
        </div>
        <div id="contact">
          <ContactCard />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
