import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LeaderboardIndexItem extends Component {
  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.rank}
          </Text>
          <Text style={styles.text}>
            {this.props.player.username}
          </Text>
          <Text style={styles.text}>
            {this.props.player.net_worth}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  canvas: {
    height: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white'
  }

});
