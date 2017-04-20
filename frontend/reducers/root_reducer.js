import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import SaucesReducer from './sauces_reducer';
import SauceReducer from './sauce_reducer';

 const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  sauces: SaucesReducer,
  sauce: SauceReducer
});


export default RootReducer;
