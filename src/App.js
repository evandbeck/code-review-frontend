import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <Home/>
      <Challenges/>
      <Solutions/>
    </div>
  );
}

export default App;
