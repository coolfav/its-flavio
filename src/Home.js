import './All.css';
import { NavLink } from 'react-router';

function Home() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="blurb">
        <p>name: flavio irani </p>
        <p>major: computer science </p>
        <p>minor: physics </p>
        <p>school: georgia institute of technology </p>
        <p>interests: full-stack, devOps, networking, computer architecture, quantum computing</p>
        <p>experience: full-stack, AI/ML, web development, modeling and simulation, operating systems and processor design_</p>
      </div>
      <div style={{'margin-top': '23%', 'font-family': 'Consolas', 'font-size': '150%'}}>
        <a href='https://www.linkedin.com/in/flavio-irani' target='_blank' rel="noreferrer"  style={{'margin-top': '80%', 'padding-left': '92%', 'text-decoration': 'none', 'color': 'rgb(0, 182, 182)'}}>linkedIn</a>
      </div>
    </div>
  );
}

export default Home;
