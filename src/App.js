import './App.css';
import {Buttons} from './buttons.js';
import {Three} from './three.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p className='Flav'>
          hey, it's flavio.
        </p>
        <a
          className="App-link"
          href="https://www.github.com/coolfav"
          target="_blank"
          rel="noopener noreferrer"
        >
         My GitHub
        </a>
      </div>
      <Three></Three>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
