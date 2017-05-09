import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_USER_DETAILS } from '../actions/user_actions';
import { merge } from 'lodash';

const CheckinsReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ALL_CHECKINS:
      return action.checkins || {};
    case RECEIVE_USER_DETAILS:
      return action.res.checkins || {};
    case RECEIVE_CHECKIN:{
      let newState = merge({}, oldState);
      newState[action.checkin.id] = action.checkin;
      return newState;
    }
    case REMOVE_CHECKIN:{
      let newState = merge({}, oldState);
      delete newState[action.checkin.id];
      return newState;
    }
    default:
      return oldState;
  }
};
export default CheckinsReducer;
