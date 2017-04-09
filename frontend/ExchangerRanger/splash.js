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
        <Text style={styles.quote}>
          "Money won is twice as sweet as money earned"
        </Text>
        <Text style={styles.quoted}>
          - Eddie Felson, The Color of Money
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Sign Up"
            onPress={() => this.props.navigator.push({id: 'Register'})} >
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => this.props.navigator.push({id: 'Login'})} >
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="StockIndex"
            onPress={() => this.props.navigator.push({id: 'StockIndex'})} >
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Leaderboard"
            onPress={() => this.props.navigator.push({id: 'Leaderboard'})} >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115635',
  },
  welcome: {
    color: '#BBD149',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
  quote: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 16,
    fontWeight: '700',
  },

  quoted: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
    paddingBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#BBD149',
    fontStyle: 'italic',
    fontWeight: '200',
    marginBottom: 5,
  },

  buttonContainer: {
    backgroundColor: '#74B530',
    width: 200,
    margin: 5,
  },

  button: {
    textAlign: 'center',
    color: '#115635',
    fontWeight: '700',
  }
});
