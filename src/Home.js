import './Home.css';
import { NavLink } from 'react-router';

function Home() {
  return (
    <div className="App">
      <div className="navbar" >
        <text className='Flav'>
          hey, it's flavio_
        </text>
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

export default Home;
