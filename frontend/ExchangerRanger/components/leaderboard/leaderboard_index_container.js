import { connect } from 'react-redux';
import { fetchUsers } from './../../actions/user_actions';
import LeaderboardIndex from './leaderboard_index';
import React, {Component} from 'react-native';

const mapStateToProps = (state) =>   {
  return ({
    currentUser: state.session.currentUser,
    users:
    Object.keys(state.users).map(id => state.users[id]).sort((a,b) => {
      return b.net_worth - a.net_worth;
    })
  });
};

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardIndex);
