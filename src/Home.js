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
        <p>name: <span style={{'color': 'white'}}>Flavio Irani</span> </p>
        <p>major: <span style={{'color': 'white'}}>Computer Science</span> </p>
        <p>minor: <span style={{'color': 'white'}}>Physics</span> </p>
        <p>school: <span style={{'color': 'white'}}>Georgia institute of technology</span> </p>
        <p>interests: <span style={{'color': 'white'}}>Full-stack, devOps, networking, computer architecture, quantum computing</span></p>
        <p>experience: <span style={{'color': 'white'}}>Full-stack, AI/ML, web development, modeling and simulation, operating systems and processor design</span></p>
        <p>extracurriculars: <span style={{'color': 'white'}}>President of WreckCon at GT, quantum computing organization</span></p>
        <p>hobbies: <span style={{'color': 'white'}}>Prop and costume making, HEMA, cooking and baking</span></p>
        <p style={{'padding-top': '3%', 'font-family': 'Consolas'}}>retrieving data...</p>
        <p style={{'padding-top': '3%', 'font-family': 'Consolas', 'color' : 'white'}}>Flavio has a wide breadth of experience from his co-ops, internships, robotics competitions and coursework. He specializes in being a jack of all trades, being able to bring his knowledge to every aspect of the project, team, and company. His portfolo includes work at the transistor level all the way up to the highest levels of automation_</p>
      </div>
      <div style={{'margin-top': '23%', 'font-family': 'Consolas', 'font-size': '150%'}}>
        <a href='https://www.linkedin.com/in/flavio-irani' target='_blank' rel="noreferrer"  style={{'margin-top': '80%', 'padding-left': '92%', 'text-decoration': 'none', 'color': 'rgb(0, 182, 182)'}}>linkedIn</a>
      </div>
    </div>
  );
}

export default Home;
