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

//thunk actions
// export const getUser = userId => dispatch => {
//   return UserAPIUtil.fetchUser(userId)
//     .then((res) => console.log(res.sauces));
// };


// export const getUser = userId => dispatch => {
//   return UserAPIUtil.fetchUser(userId)
//     .then((res) => dispatch(receiveUser(res.user)),
//       (err) => dispatch(receiveErrors(err.responseJSON)))
//     .then((res) => dispatch(receiveSauces(res.sauces)),
//         (err) => dispatch(receiveErrors(err.responseJSON)))
//     .then((res) => dispatch(receiveCheckins(res.checkins)),
//         (err) => dispatch(receiveErrors(err.responseJSON)));
// };


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
