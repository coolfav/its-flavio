import './All.css';
import { NavLink } from 'react-router';

function Projects() {
  return (
    <div className="App">
      <div className="navbar" >
        <NavLink className="Flav" to="/">hey, it's flavio_</NavLink>
        <NavLink className="experience" to="/experience">experience_</NavLink>
        <NavLink className="projects" to="/projects">projects_</NavLink>
        <NavLink className="resume" to="/resume">resume_</NavLink>
      </div>
      <div className="discord">
        <a href='https://github.com/coolfav/TheBigBot' target='_blank' rel="noreferrer" style={{'text-decoration': 'none', 'color': 'inherit'}}>Automated Command Bot for Discord</a>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
      </div>
      <div className="pokecross">
        <p>Automated Command Bot for Discord</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
      </div>
      <div className="pokemon">
        <a href='https://github.com/coolfav/TheBigBot' target='_blank' rel="noreferrer" style={{'text-decoration': 'none', 'color': 'inherit'}}>Automated Command Bot for Discord</a>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
      </div>
      <div className="this-website">
        <p>This website</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
        <p style={{'font-size': '80%', 'padding-left':'2%'}}>_Created a bot that would respond to input commands via text messages in a Discord channel, hosted in an AWS server</p>
      </div>
    </div>
  );
}

export default Projects;
