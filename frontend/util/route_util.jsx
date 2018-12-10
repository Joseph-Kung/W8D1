import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({
  component: Component, path, loggedIn, exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

const mstp = state => ({
  loggedIn: Boolean(state.session.id),
});

const AuthRoute = withRouter(connect(mstp)(Auth));

export default AuthRoute;
