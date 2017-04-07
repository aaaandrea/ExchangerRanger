import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
//clear errors

export const signup = user => dispatch => {
  console.log("in the signup action creator");
  return (APIUtil.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
      err => dispatch(receiveErrors(err.responseJSON))));

};
//after login, may need to add another then and fetch stocks...?
export const login = user => dispatch => (
  APIUtil.login(user)
    .then(sessionUser => dispatch(receiveCurrentUser(sessionUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
