import * as SearchAPIUtil from '../util/search_api_util';
// import {receiveErrors} from './util_actions';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

//action creators
const receiveSearchResults = results => {
  return({
    type: RECEIVE_SEARCH_RESULTS,
    results
  });
};

//thunk actions
export const search = text => dispatch => {
  return SearchAPIUtil.search(text)
    .then((res) => dispatch(receiveSearchResults(res)));
};
