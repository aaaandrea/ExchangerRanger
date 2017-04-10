import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
//clear errors



export const signup = user => dispatch => {
  return(
    APIUtil.signup(user)
      .then(_newUser => {
        if(_newUser instanceof Array){
          dispatch(receiveErrors(_newUser));
        } else {
          dispatch(receiveCurrentUser(_newUser));
        }
      })
  );
};

export const login = user => dispatch => {
  return(
    APIUtil.login(user)
      .then(_user => {
        if(_user instanceof Array){
          dispatch(receiveErrors(_user));
        } else {
          dispatch(receiveCurrentUser(_user));
        }
      })
  );
};

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
