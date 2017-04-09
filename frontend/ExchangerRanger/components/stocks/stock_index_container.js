import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany } from './../../actions/stock_actions';
import StockIndex from './stock_index';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return ({
    stocks:
    Object.keys(state.stocks).slice(0,6).map(id => state.stocks[id])
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: company => dispatch(fetchCompany(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
