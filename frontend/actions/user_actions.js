import * as UserAPIUtil from '../util/user_api_util';
import {receiveErrors} from './util_actions';
import {receiveSauces} from './sauce_actions';
import {receiveCheckins} from './checkin_actions';
export const RECEIVE_USER = 'RECEIVE_USER';

//action creators
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});



export const getUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(
      (res) => {
      dispatch(receiveSauces(res.sauces));
      dispatch(receiveCheckins(res.checkins));
      dispatch(receiveUser(res.user));
      },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};


export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user)
    .then(
      (res) => {
      dispatch(receiveUser(res.user));
      },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};
