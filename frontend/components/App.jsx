import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignUpFormContainer from './SignupFormContainer';
import AuthRoute from '../util/route_util';
// import BenchIndexContainer from './bench_index_container';
import SearchContainer from './search_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
