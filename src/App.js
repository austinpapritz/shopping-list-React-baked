import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header';
import Items from './components/Items/Items';
import backgroundImage from './supermarket.jpeg';

import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-up" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
