/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const stocks = [{symbol: "YHOO", name: "Yahoo", share_price: 50},
{symbol: "AAPL", name: "Apple", share_price: 70},
{symbol: "GOOG", name: "Google", share_price: 64}];

export default class Splash extends Component {
  componentWillMount() {
    // var navigator = this.props.navigator;
    // setTimeout(() => {
    //   navigator.replace({
    //     id: 'Stock',
    //   });
    // }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ExchangerRanger!
        </Text>
        <Text style={styles.instructions}>
          Money won is twice as sweet as money earned
        </Text>
        <Text style={styles.instructions}>
          - The Color of Money
        </Text>
        <Button
          title="Sign Up"
          onPress={() => this.props.navigator.push({id: 'Register'})} >
        </Button>
        <Button
          title="Login"
          onPress={() => this.props.navigator.push({id: 'Login'})} >
        </Button>
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
