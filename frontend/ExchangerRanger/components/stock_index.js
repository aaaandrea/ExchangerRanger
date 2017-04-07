import React, { Component } from 'react';
import StockIndexItem from './stock_index_item';
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
const Platform = require('Platform');

export default class StockIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.stocks.map(stock => <StockIndexItem stock={stock} />)}
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
