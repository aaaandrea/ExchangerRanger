import { connect } from 'react-redux';
import { login, signup, logout } from './../../actions/session_actions';
import Login from './login';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, {location}) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
