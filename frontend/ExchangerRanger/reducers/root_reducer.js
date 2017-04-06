import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import StocksReducer from './stocks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stocks: StocksReducer
});

export default RootReducer;
