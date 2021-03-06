
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/util_actions';
import { merge } from 'lodash';

const _defaultState ={};
const ErrorsReducer = (oldState= _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return oldState;
  }
};

export default ErrorsReducer;
