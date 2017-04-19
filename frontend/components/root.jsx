import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Index from './index';
import SessionFormContainer from './session/session_form_container';
//material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//colors
import { redA700, darkBlack, white, grey300, cyan500, yellow500 } from '../style/colors.js';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: redA700,
    primary2Color: redA700,
    primary3Color: redA700,
    accent1Color: yellow500,
    accent2Color: yellow500,
    accent3Color: yellow500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: yellow500,
    pickerHeaderColor: cyan500,
    shadowColor: darkBlack,
  },
  textField: {
    textColor: darkBlack,
  },
  appBar: {
    height: 50,
  },
  raisedButton: {
    borderColor: redA700
  }
});



const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
  let currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('/home');
    }
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
  let currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history = { hashHistory }>
          <Route path ="/" component={ Index } onEnter={_redirectIfLoggedIn} />
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path ="/home" component={ App } onEnter={_redirectUnlessLoggedIn}>

          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};


export default Root;
