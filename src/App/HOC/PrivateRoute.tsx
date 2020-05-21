import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Routes from '../Config/routes';

interface IPrivateRoute {
  component: Function
  exact: boolean
  path: string
  rest?: any
}

function isLoggedIn(): boolean {
  return true;
}

function PrivateRoute({component: Component, ...rest}: IPrivateRoute) { 
  return (
    <Route
      {...rest}
      render={
        props => (
          isLoggedIn()
            ? (
              <Component {...props} />
            ) : (
              <Redirect 
                to={{
                  pathname: Routes.LOGIN,
                  state: {
                    from: props.location,
                  },
                }}
              />
            )
        )
      }
    />
  );
}


export default PrivateRoute
