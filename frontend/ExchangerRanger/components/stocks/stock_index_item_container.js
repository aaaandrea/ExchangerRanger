import { connect } from 'react-redux';
import { fetchCompany } from './../../actions/stock_actions';
import StockIndexItem from './stock_index_item';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompany: company => dispatch(fetchCompany(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndexItem);
