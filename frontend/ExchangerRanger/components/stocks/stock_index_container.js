import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany } from './../../actions/stock_actions';
import StockIndex from './stock_index';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  // console.log(state);
  let user;
  if (state.session.currentUser){
    user = state.session.currentUser;
  }
  else{
    user = {username: '', net_worth: 1, holdings: [], id: 1};
  }
  return ({
    currentUser: user,
    stocks:
    Object.keys(state.stocks).map(id => state.stocks[id])
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: company => dispatch(fetchCompany(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
