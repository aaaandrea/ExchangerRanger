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
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Welcome to ExchangerRanger!
          </Text>
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>
              "Money won is twice as sweet as money earned"
            </Text>
            <Text style={styles.quoted}>
              - Eddie Felson, The Color of Money
            </Text>
          </View>
        </View>
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
    backgroundColor: '#FFFFFE',
  },

  welcomeContainer: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B530',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },

  welcome: {
    color: '#115635',
    fontSize: 36,
    fontWeight: '600',
    fontFamily: 'GillSans-Light',
    textAlign: 'center',
    margin: 10,
  },

  quoteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 8,
    width: 300,
    height: 100,
    backgroundColor: '#FFFFFE',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },

  quote: {
    margin: 6,
    textAlign: 'center',
    color: '#115635',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'GillSans-Light',
    letterSpacing: 1,
  },

  quoted: {
    textAlign: 'center',
    fontFamily: 'GillSans-Light',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
    letterSpacing: 1,
    color: '#115635',
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
    margin: 10,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },

  button: {
    textAlign: 'center',
    color: '#115635',
    fontWeight: '700',
    fontFamily: 'GillSans-Light',
  }
});
