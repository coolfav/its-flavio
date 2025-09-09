import './All.css';
import { NavLink } from 'react-router';

function Projects() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/its-flavio">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="discord">
        <a href='https://github.com/coolfav/TheBigBot' target='_blank' rel="noreferrer" style={{'text-decoration': 'none', 'color': 'inherit'}}>Automated Command Bot for Discord</a>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Used asynchronous framework and APIs to communicate with Google, Youtube, Discord, and other databases</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Currently has over 100 active users in 50 discord servers</p>
      </div>
      <div className="pokecross">
        <p>PokeCross Android Application</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Collaborated with a team on a Frogger-style Android game employing AGILE and Scrum practices in Java</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Programmed player character, implemented art and enemy AI, created screen layouts in XML</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Contributed 1k+ lines of code to the codebase via Git and managed project via Trello</p>
      </div>
      <div className="this-website">
        <p>This website</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Made completely from scratch using React and Github hosting</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_No generative AI was used in the creation of this website</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Still a WIP</p>
      </div>
      <div style={{'margin-top': '6%', 'font-family': 'Consolas', 'font-size': '150%'}}>
        <a href='https://github.com/coolfav' target='_blank' rel="noreferrer"  style={{'margin-top': '80%', 'padding-left': '92%', 'text-decoration': 'none', 'color': 'rgb(0, 182, 182)'}}>github</a>
      </div>
    </div>
  );
}

export default Projects;
