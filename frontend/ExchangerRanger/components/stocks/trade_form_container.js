import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany } from './../../actions/stock_actions';
import TradeForm from './trade_form';
import React, {Component} from 'react-native';

const mapStateToProps = (state, ownProps) =>   {
  return ({
    currentUser: state.session.currentUser,
    stock: ownProps.stock
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  updatePrice: price => dispatch(updatePrice(price)),
  updateHolding: holding => dispatch(updateHolding(holding)),
  createHolding: holding => dispatch(createHolding(holding))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
