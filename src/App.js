import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Challenges/>
      <Solutions/>
    </div>
  );
}

export default App;
