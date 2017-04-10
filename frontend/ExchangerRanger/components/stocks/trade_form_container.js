import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany, updateHolding, createHolding } from './../../actions/stock_actions';
import TradeForm from './trade_form';
import React, {Component} from 'react-native';

const mapStateToProps = (state, ownProps) =>   {
  let user;
  if (state.session.currentUser){
    user = state.session.currentUser;
  }
  else{
    user = {username: '', net_worth: 1, holdings: [], id: 1};
  }
  return ({
    currentUser: user,
    stock: ownProps.stock
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompany: company => dispatch(fetchCompany(company)),
  updatePrice: price => dispatch(updatePrice(price)),
  updateHolding: holding => dispatch(updateHolding(holding)),
  createHolding: holding => dispatch(createHolding(holding))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
