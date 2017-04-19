import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: {}
};

const SessionReducer = (oldState= _defaultState, action) => {

  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, oldState, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      console.log("hi");
      console.log(merge({}, oldState, {errors}));
      return merge({}, oldState, {errors});
    default:
      return oldState;
  }
};

export default SessionReducer;
