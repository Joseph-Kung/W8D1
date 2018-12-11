import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


// TEST
import { login, logout, signup } from './util/session_api_util';
import { loginUser, logoutUser, signupUser } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.signupUser = signupUser;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBenches = fetchBenches;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
