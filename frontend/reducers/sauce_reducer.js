import { RECEIVE_ALL_SAUCES } from '../actions/sauce_actions';
import { merge } from 'lodash';


const SauceReducer = (oldState= {}, action) => {

  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_ALL_SAUCES:
      return merge({}, oldState, action.sauces);
    default:
      return oldState;
  }
};

export default SauceReducer;
