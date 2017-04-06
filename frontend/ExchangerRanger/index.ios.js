import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './register';

export default class ExchangerRanger extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ExchangerRanger!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//
// <Text style={styles.instructions}>
//   To get started, edit index.ios.js
// </Text>
// <Text style={styles.instructions}>
//   Press Cmd+R to reload,{'\n'}
//   Cmd+D or shake for dev menu
// </Text>

AppRegistry.registerComponent('ExchangerRanger', () => ExchangerRanger);
