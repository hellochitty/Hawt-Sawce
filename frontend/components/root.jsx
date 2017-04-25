import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Index from './index';
import SessionFormContainer from './session/session_form_container';
import SauceIndexContainer from './sauce/sauce_index_container';
import SauceContainer from './sauce/sauce_container';
import SauceFormContainer from './sauce/sauce_form_container';
import CheckinIndexContainer from './checkin/checkin_index_container';
import CheckinContainer from './checkin/checkin_container';
import UserContainer from './user/user_container';
import { IntlProvider } from 'react-intl';
//material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//colors
import { redA700, darkBlack, white, grey300, cyan500, yellow500, yellow600 } from '../style/colors.js';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto Condensed, sans-serif',
  palette: {
    primary1Color: redA700,
    primary2Color: redA700,
    primary3Color: redA700,
    accent1Color: yellow600,
    accent2Color: yellow600,
    accent3Color: yellow600,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: yellow600,
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
    color: yellow600
  },
  icon:{
    color: yellow600
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
      <IntlProvider locale="en">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history = { hashHistory }>
            <Route path ="/" component={ Index } onEnter={_redirectIfLoggedIn} />
            <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
            <Route path ="/home" component={ App }>
              <IndexRoute component={CheckinIndexContainer} />
              <Route path ="sauces" component={ SauceIndexContainer } />
              <Route path ="sauces/new" component={ SauceFormContainer } onEnter={_redirectUnlessLoggedIn} />
              <Route path ="sauces/:sauce_id" component={ SauceContainer } />
              <Route path ="sauces/:sauce_id/edit" component={ SauceFormContainer } onEnter={_redirectUnlessLoggedIn} />
              <Route path ="checkins/:checkin_id" component={ CheckinContainer } />
              <Route path ="users/:user_id" component={ UserContainer } />
            </Route>
          </Router>
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>
  );
};


export default Root;
