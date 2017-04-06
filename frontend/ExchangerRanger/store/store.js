'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

// could be helpful for later iteration
// import {persistStore, autoRehydrate} from 'redux-persist';
// var {AsyncStorage} = require('react-native');

import RootReducer from './reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer,
              preloadedState,
              applyMiddleware(thunk))
);

module.exports = configureStore;
