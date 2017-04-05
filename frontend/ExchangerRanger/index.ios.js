/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StockIndexItem from './components/stock_index_item';

const stocks = [{symbol: "YHOO", name: "Yahoo", share_price: 50},
{symbol: "AAPL", name: "Apple", share_price: 70},
{symbol: "GOOG", name: "Google", share_price: 64}]

export default class ExchangerRanger extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StockIndexItem stock={stocks[0]} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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

AppRegistry.registerComponent('ExchangerRanger', () => ExchangerRanger);
