import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>it's</code> Pepper1.io !
        </p>
        <a
          className="App-link"
          href="https://pepper1.io"
          target="_blank"
          rel="noopener noreferrer"
        >
        Visit us
        </a>
      </header>
    </div>
  );
}

export default App;
