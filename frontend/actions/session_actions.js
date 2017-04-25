import * as SessionAPIUtil from '../util/session_api_util';
import {receiveErrors} from './util_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';



const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});






export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then((res) => dispatch(receiveCurrentUser(res["user"])),
      (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then((res) => dispatch(receiveCurrentUser(null)));
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then((res) => dispatch(receiveCurrentUser(res)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
};
