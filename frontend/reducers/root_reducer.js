import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import SaucesReducer from './sauces_reducer';
import SauceReducer from './sauce_reducer';
import SauceCompaniesReducer from './sauce_companies_reducer';
import CheckinsReducer from './checkins_reducer';
import CheckinReducer from './checkin_reducer';
import UserReducer from './user_reducer';
import SaucesOrderReducer from './sauces_order_reducer';

 const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  sauces: SaucesReducer,
  saucesOrder: SaucesOrderReducer,
  sauce: SauceReducer,
  companies: SauceCompaniesReducer,
  checkins: CheckinsReducer,
  checkin: CheckinReducer,
  user: UserReducer
});


export default RootReducer;
