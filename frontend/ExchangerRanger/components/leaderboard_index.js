import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import LeaderboardIndexItem from './leaderboard_index_item';

const currentUser = {username: "nedders", net_worth: 8239.23};

const players = [
  {username: "aaronbnb", net_worth: 8850.35},
  {username: "adelrio", net_worth: 14350.45},
  {username: "rodeezy", net_worth: 2223.55}
];

export default class LeaderboardIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text>{currentUser.username}</Text>
        </View>
        <LeaderboardIndexItem player={players[0]} rank={1}/>
        <LeaderboardIndexItem player={players[1]} rank={2}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 15,
  },
  banner: {
    margin: 10,
    height: 30,
    backgroundColor: '#115635',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
