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
  componentDidMount() {
    this.refs.searchBar.focus();
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar style={styles.search}
          ref='searchBar'
	        placeholder='Search'
        />
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
  },
  search: {
    height: 35,
    width: 200,
    top: 20
  }
});

// <StockIndex stocks={this.props.stocks} navigator={this.props.navigator} />
