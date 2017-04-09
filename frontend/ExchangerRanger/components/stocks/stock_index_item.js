import React, { Component } from 'react';
import TradeForm from './trade_form';
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

export default class StockIndexItem extends Component {
  dollarPrice(price_str){
    if (price_str[price_str.length-2]==='.'){
      return price_str+0;
    }
    return price_str;
  }

  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.container}>
          <View style={styles.topLine}>
            <Text style={styles.text}>
              {this.props.stock.symbol}
            </Text>
            <TradeForm stock={this.props.stock} />
            <Text style={styles.text}>
              ${this.dollarPrice(this.props.stock.share_price.toString())}
            </Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.text}>
              {this.props.stock.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  canvas: {
    height: 60,
    width: 200
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'column'
  },
  text: {
    color: 'white'
  },
  topLine: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {

  },


});
