import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState= _defaultState, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultState, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultState, {errors});
    default:
      return oldState;
  }
};

export default SessionReducer;
