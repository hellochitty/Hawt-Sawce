import { RECEIVE_SAUCES_ORDER } from '../actions/sauce_actions';
import { merge } from 'lodash';



const SaucesOrderReducer = (oldState= [], action) => {

  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SAUCES_ORDER:
      return action.order;
    default:
      return oldState;
  }
};

export default SaucesOrderReducer;
