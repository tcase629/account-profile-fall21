import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Profile from './components/users/Profile';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;