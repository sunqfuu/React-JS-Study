import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center text-warning">
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <i class="fa-solid fa-graduation-cap"></i> 
            Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
