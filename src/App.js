import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Card/>
          <Navigator/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
