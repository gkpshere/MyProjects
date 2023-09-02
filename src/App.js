import logo from './logo.svg';
import './App.css';
import Simple from './Simple'
import SimpleFunLayered from './SimpleFun';

function App() {
  return (
    <div className="App">
      <header className="">
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
           React
        </a>
      </header>
      <Simple>
        <p>Children of Simple</p>
      </Simple>

      <hr>

      </hr>
      <hr>

      </hr>
      <SimpleFunLayered>
      <p>Children of SimpleFun</p>
      </SimpleFunLayered>
    </div>
  );
}

export default App;
