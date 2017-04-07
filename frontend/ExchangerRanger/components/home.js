import React, { Component } from 'react';
import StockIndex from './stock_index'
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

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {console.log("HEYHEYHEYHEYHEYHEY")}
        {console.log(this.props.stocks)}
        {console.log("HEYHEYHEYHEYHEYHEY")}
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
