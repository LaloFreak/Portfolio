import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Card/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
