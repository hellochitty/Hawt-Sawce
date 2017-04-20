import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
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
    default:
      return oldState;
  }
};

export default SessionReducer;
