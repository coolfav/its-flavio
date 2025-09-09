import './All.css';
import { NavLink } from 'react-router';

function Resume() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="blurb">
        <p>it's me</p>
      </div>
    </div>
  );
}

export default Resume;
