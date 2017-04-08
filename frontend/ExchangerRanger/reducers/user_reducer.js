import {
  RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, users);
    default:
      return state;
  }
};

export default UserReducer;
