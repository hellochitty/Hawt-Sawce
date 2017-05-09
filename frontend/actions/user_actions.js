import * as UserAPIUtil from '../util/user_api_util';
import {receiveErrors} from './util_actions';
import {receiveSauces} from './sauce_actions';
import {receiveCheckins} from './checkin_actions';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_UPDATES = 'RECEIVE_USER_UPDATES';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

//action creators
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserUpdates = user => ({
  type: RECEIVE_USER_UPDATES,
  image_url: user.image_url
});

//special action creator
const receiveUserDetails = res => ({
  type: RECEIVE_USER_DETAILS,
  res
});

export const getUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(
      (res) => {
      dispatch(receiveUserDetails(res));
      },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};


export const updateUser = (user, id) => dispatch => {
  return UserAPIUtil.updateUser(user, id)
    .then(
      (res) => {
      dispatch(receiveUser(res.user));
      dispatch(receiveUserUpdates(res.user));
      },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};
