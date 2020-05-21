import React from 'react';
import { Route, Switch } from 'react-router-dom';
/** Routes */
import Routes from './Config/routes';
//  import PrivateRoute from './HOC/PrivateRoute';
/** View */
import Home from './Views/Home';


function App() {
  return (
    <Switch>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
