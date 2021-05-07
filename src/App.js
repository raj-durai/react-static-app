import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to S3 world!
        </h2>
        <p>This is hosted in S3 serverless. Version 1</p>
      </header>
    </div>
  );
}

export default App;
