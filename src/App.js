import logo from './logo.svg';
import './App.css';
import { readString } from 'react-papaparse'
import data from './data.js';

function App() {

readString(data, {
  worker: true,
  header: true,
  complete: (results) => {
    console.log(results)
  }
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
