import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import StocksReducer from './stocks_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stocks: StocksReducer,
  users: UserReducer
});

export default RootReducer;
