import { connect } from 'react-redux';
import { fetchUsers } from './../../actions/user_actions';
import UserShow from './user_show';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
