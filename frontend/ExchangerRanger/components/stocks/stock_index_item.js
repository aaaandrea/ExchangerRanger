import React, { Component } from 'react';
import TradeFormContainer from './trade_form_container';
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
            <Text style={styles.symbol}>
              {this.props.stock.symbol}
            </Text>
            <TradeFormContainer stock={this.props.stock} />
            <Text style={styles.priceText}>
              ${this.dollarPrice(this.props.stock.share_price.toString())}
            </Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.nameText}>
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
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -1
    },
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column'
  },
  text: {
    color: '#727272',
  },
  symbol: {
    color: '#4f4f4f',
    fontSize: 16,
    marginLeft: 8,
  },
  nameText: {
    color: '#6d6d6d',
    fontSize: 12,
    marginLeft: 8,
    marginBottom: 4,
  },
  priceText: {
    color: '#8c8c8c',
    fontSize: 24,
    marginTop: 18,
    marginRight: 10,
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
