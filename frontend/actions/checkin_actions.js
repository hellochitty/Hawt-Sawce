import * as CheckinAPIUtil from '../util/checkin_api_util';
import {receiveErrors} from './util_actions';

export const RECEIVE_ALL_CHECKINS= 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN= 'RECEIVE_CHECKIN';
export const REMOVE_CHECKIN= 'REMOVE_CHECKIN';

export const receiveCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
});

const deleteCheckin = checkin => ({
  type: REMOVE_CHECKIN,
  checkin
});

export const getCheckins = () => dispatch => {
  return CheckinAPIUtil.fetchCheckins()
    .then((res) => dispatch(receiveCheckins(res)));
};

export const getCheckin = (checkinId) => dispatch => {
  return CheckinAPIUtil.fetchCheckin(checkinId)
    .then((res) => dispatch(receiveCheckin(res)));
};

export const removeCheckin = (checkinId) => dispatch => {
  return CheckinAPIUtil.removeCheckin(checkinId)
    .then((res) => dispatch(deleteCheckin(res)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const addCheckin = (checkin) => dispatch => {
  return CheckinAPIUtil.addCheckin(checkin)
    .then((res) => dispatch(receiveCheckin(res)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const addComment = (comment) => dispatch => {
  return CheckinAPIUtil.addComment(comment)
    .then((res) => dispatch(receiveCheckin(res)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};
