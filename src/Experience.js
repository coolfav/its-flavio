import './All.css';
import { NavLink } from 'react-router';

function Experience() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="discord">
        <a href='https://github.com/coolfav/TheBigBot' target='_blank' rel="noreferrer" style={{'text-decoration': 'none', 'color': 'inherit'}}>Cisco Systems</a>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Created a bot that would respond to input commands via text messages in a Discord channel</p>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Used asynchronous framework and APIs to communicate with Google, Youtube, Discord, and other databases</p>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Currently has over 100 active users in 50 discord servers</p>
      </div>
      <div className="pokecross">
        <p>Itential</p>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Collaborated with a team on a Frogger-style Android game employing AGILE and Scrum practices in Java</p>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Programmed player character, implemented art and enemy AI, created screen layouts in XML</p>
        <p style={{'font-size': '80%', 'padding-left':'2%', 'color' : 'white'}}>_Contributed 1k+ lines of code to the codebase via Git and managed project via Trello</p>
      </div>
    </div>
  );
}

export default Experience;
