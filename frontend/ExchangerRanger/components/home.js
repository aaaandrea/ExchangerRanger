import React, { Component } from 'react';
import StockIndex from './stock_index'
import SearchBar from 'react-native-search-bar';
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

const stocks = [{symbol: "YHOO", name: "Yahoo", share_price: 50},
{symbol: "AAPL", name: "Apple", share_price: 70},
{symbol: "GOOG", name: "Google", share_price: 64}];

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <StockIndex stocks={stocks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// <StockIndex stocks={this.props.stocks} navigator={this.props.navigator} />
