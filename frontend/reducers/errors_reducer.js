import { RECEIVE_ERRORS } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/util_actions';
import { merge } from 'lodash';

const _defaultState ={};

const ErrorsReducer = (oldState= _defaultState, action) => {

  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default ErrorsReducer;
