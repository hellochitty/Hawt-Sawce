import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import SauceReducer from './sauce_reducer';

 const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  sauces: SauceReducer
});


export default RootReducer;
