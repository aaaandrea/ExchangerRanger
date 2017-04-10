import { connect } from 'react-redux';
import { login, signup, logout } from './../../actions/session_actions';
// import { updatePrice } from '../../actions/stock_actions';
import Register from './register';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {

  return ({loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors});
  // stocks: Object.keys(state.stocks).map(id => state.stocks[id])});
};

const mapDispatchToProps = (dispatch, {location}) => ({

  //ask for explanation about this one...
  // let formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  //
  // return {
  //   processForm: user => dispatch(processForm(user)),
  //   formType
  // };
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
  // updatePrice: company => dispatch(updatePrice(company))

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
