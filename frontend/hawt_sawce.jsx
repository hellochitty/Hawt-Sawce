import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import { login, logout, signup } from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={ store } />, root);
  window.login = login;
  window.logout = logout;
  window.store = configureStore();
});


// window.login = login;
// window.logout = logout;
// window.signup = signup;
