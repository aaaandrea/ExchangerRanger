import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany, updatePrice } from './actions/stock_actions';
import Splash from './splash';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  console.log(state);
  return ({
    stocks:
    Object.keys(state.stocks).map(id => state.stocks[id])
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: company => dispatch(fetchCompany(company)),
  updatePrice: company => dispatch(updatePrice(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
