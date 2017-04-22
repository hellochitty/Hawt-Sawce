import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import SaucesReducer from './sauces_reducer';
import SauceReducer from './sauce_reducer';
import SauceCompaniesReducer from './sauce_companies_reducer';
import CheckinsReducer from './checkins_reducer';

 const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  sauces: SaucesReducer,
  sauce: SauceReducer,
  companies: SauceCompaniesReducer,
  checkins: CheckinsReducer
});


export default RootReducer;
