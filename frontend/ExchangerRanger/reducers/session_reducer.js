//import LOGOUT
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, state, {currentUser: action.currentUser});
      // // console.log("ACTION");
      // console.log(action);
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
