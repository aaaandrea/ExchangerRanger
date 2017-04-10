//import LOGOUT
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      const newState = merge({}, state, _nullUser, {currentUser});
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
