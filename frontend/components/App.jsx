import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignupFormContainer';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
