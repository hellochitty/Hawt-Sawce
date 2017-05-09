import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

const SearchResultsReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    default:
      return oldState;
  }
};

export default SearchResultsReducer;
