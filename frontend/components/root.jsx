import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();


const Root = ({ store }) => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history = { hashHistory }>
        <Route path ="/" component={ App }></Route>
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/signup" component={ SessionFormContainer } />

      </Router>
    </MuiThemeProvider>
  </Provider>
);


export default Root;
