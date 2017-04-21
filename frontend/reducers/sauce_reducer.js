import { RECEIVE_SAUCE, REMOVE_SAUCE } from '../actions/sauce_actions';
import { merge } from 'lodash';

const _defaultState = {
  name: "",
  description: "",
  scoville_units: "",
  image_url: "",
  company: ""
};

const SauceReducer = (oldState= _defaultState, action) => {

  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SAUCE:
      return merge({}, oldState, action.sauce);
    case REMOVE_SAUCE:{
      let newState = merge({}, oldState);
      if (action.sauce){
        delete newState[action.sauce.id];
      }
      return newState;
    }
    default:
      return oldState;
  }
};

export default SauceReducer;
