import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Button variant='content' color='secondary'>Click</Button>
      </header>
    </div>
  );
}

export default App;
