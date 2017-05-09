import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_DETAILS } from '../actions/user_actions';
import { merge } from 'lodash';

const UserReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_USER_DETAILS:
      return action.res.user;
    default:
      return oldState;
  }
};

export default UserReducer;
