import './App.css';
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
      <Three>
      </Three>
    </div>
  );
}

export default App;
