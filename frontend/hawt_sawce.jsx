import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import { login, logout, signup } from './util/session_api_util';
// import { login, logout, signup } from './actions/session_actions';
import { getSauces } from './actions/sauce_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store } />, root);
  // window.login = login;
  // window.logout = logout;
  window.store = store;
  window.getSauces = getSauces;

});


// window.login = login;
// window.logout = logout;
// window.signup = signup;
