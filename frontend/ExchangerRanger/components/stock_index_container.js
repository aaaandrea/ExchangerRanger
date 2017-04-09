import { connect } from 'react-redux';
import { fetchCompanies } from './../actions/stock_actions';
import Register from './register';
import React, {Component} from 'react-native';
import StockIndex from './stock_index'

const mapStateToProps = (state) =>   {
  console.log(state);
  return ({loggedIn: Boolean(state.session.currentUser),
  errors: state.errors});
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompanies: (companies) => dispatch(fetchCompanies(companies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
