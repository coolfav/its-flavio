import './All.css';
import { NavLink } from 'react-router';

function Experience() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/its-flavio">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="coming-soon">
        <p>coming soon_</p>
      </div>
    </div>
  );
}

export default Experience;
