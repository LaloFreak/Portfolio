import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';
import { Landing } from './components/Landing/Landing';
import { Language } from './components/Language/Language';
import { Footer } from './components/Footer/Footer';
import { SocialLinks } from './components/Utils/SocialLinks';

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
      <Language/>
      <div className='contSL' >
        <SocialLinks/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
