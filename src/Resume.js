import './All.css';
import { NavLink } from 'react-router';
import resumepdf from './imgs/FlavResume_website.pdf';

function Resume() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/its-flavio">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="resume">
        <object class="pdf" 
            data={resumepdf}
            width="60%"
            height="1000">
        </object>
      </div>
    </div>
  );
}

export default Resume;
