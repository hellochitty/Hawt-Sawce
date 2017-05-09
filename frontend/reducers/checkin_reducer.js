import { RECEIVE_CHECKIN } from '../actions/checkin_actions';
import { merge } from 'lodash';

const CheckinReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CHECKIN:
      return action.checkin;
    default:
      return oldState;
  }
};

export default CheckinReducer;
