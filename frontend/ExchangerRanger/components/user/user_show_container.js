import { connect } from 'react-redux';
import { fetchCompany } from './../../actions/stock_actions';
import UserShow from './user_show';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchCompany: () => dispatch(fetchCompany())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
