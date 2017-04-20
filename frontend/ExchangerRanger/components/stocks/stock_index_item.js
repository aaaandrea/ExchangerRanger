import React, { Component } from 'react';
import TradeFormContainer from './trade_form_container';
// import {fetchCompany} from '../../actions/stock_actions';
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
  componentDidMount(){
    this.props.fetchCompany(this.props.stock);
  }

  dollarPrice(priceStr) {
    return Math.floor(priceStr).toString();
  }

  centPrice(priceStr) {
    priceStr = priceStr.toString();
    let decimalIdx = priceStr.indexOf(".");
    return priceStr.slice(decimalIdx);
  }

  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.container}>
          <View style={styles.topLine}>
            <Text style={styles.symbol}>
              {this.props.stock.symbol}
            </Text>
            <TradeFormContainer navigator={this.props.navigator} stock={this.props.stock} />
            <Text style={styles.priceText}>
              <Text style={styles.dollarSign}>$</Text>
              {this.dollarPrice(this.props.stock.share_price)}
              <Text style={styles.centSign}>{this.centPrice(this.props.stock.share_price)}</Text>
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
    backgroundColor: '#F5F5F5',
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
  dollarSign: {
    color: '#a3a3a3',
    fontSize: 12,
    paddingRight: 3,
  },
  centSign: {
    color: '#6d6d6d',
    fontSize: 16,
  },
  priceText: {
    color: '#6d6d6d',
    fontSize: 22,
    marginTop: 18,
    marginRight: 10,
  },
  topLine: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
