import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany, updateHolding, createHolding, updatePrice } from './../../actions/stock_actions';
import TradeForm from './trade_form';
import React, {Component} from 'react-native';

const mapStateToProps = (state, ownProps) =>   {
  let user;
  let userHoldings;
  if (state.session.currentUser){
    user = state.session.currentUser;
    userHoldings = Object.keys(state.session.currentUser.holdings).map
    (id => state.session.currentUser.holdings[id]);
  }
  else{
    user = {username: '', net_worth: 1, holdings: [], id: 1};
    userHoldings = [];
  }
  return ({
    currentUser: user,
    stock: ownProps.stock,
    holdings: userHoldings
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompany: company => dispatch(fetchCompany(company)),
  updatePrice: price => dispatch(updatePrice(price)),
  updateHolding: holding => dispatch(updateHolding(holding)),
  createHolding: holding => dispatch(createHolding(holding))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
