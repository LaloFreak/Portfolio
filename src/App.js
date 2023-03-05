import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Card/>
        </Route>
      </Switch>
      <Navigator/>
    </div>
  );
}

export default App;
