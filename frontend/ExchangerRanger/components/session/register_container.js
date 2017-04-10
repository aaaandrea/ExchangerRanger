import { connect } from 'react-redux';
import { login, signup, logout } from './../../actions/session_actions';
// import { updatePrice } from '../../actions/stock_actions';
import Register from './register';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  console.log(state);
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
