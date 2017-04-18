import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>hello</h1>,root);
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = configureStore();
});
