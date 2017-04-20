import { RECEIVE_SAUCE_COMPANIES } from '../actions/sauce_actions';
import { merge } from 'lodash';

const _defaultState = [];

const SauceCompaniesReducer = (oldState= _defaultState, action) => {

  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SAUCE_COMPANIES:
      return action.companies;
    default:
      return oldState;
  }
};

export default SauceCompaniesReducer;
