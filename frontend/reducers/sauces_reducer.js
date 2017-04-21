import { RECEIVE_ALL_SAUCES, RECEIVE_SAUCE } from '../actions/sauce_actions';
import { merge } from 'lodash';


const SaucesReducer = (oldState= {}, action) => {

  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_ALL_SAUCES:
      return merge({}, oldState, action.sauces);
    case RECEIVE_SAUCE:{
      let newState = merge({}, oldState);
      newState[action.sauce.id] = action.sauce;
      return newState;
    }
    default:
      return oldState;
  }
};

export default SaucesReducer;
