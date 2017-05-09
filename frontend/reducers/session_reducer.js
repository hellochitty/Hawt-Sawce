import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_UPDATES } from '../actions/user_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null
};

const SessionReducer = (oldState= _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, oldState, {currentUser});
    case RECEIVE_USER_UPDATES:
      const newState = merge({}, oldState);
      newState.currentUser.image_url = action.image_url;
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
