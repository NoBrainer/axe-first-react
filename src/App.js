import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header role="banner">
          <h1>Header Text</h1>
      </header>
      <main className="App-header" role="main">
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
      </main>
    </div>
  );
}

export default App;
