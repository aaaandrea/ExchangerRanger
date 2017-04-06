import React, { Component } from 'react';
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
  render() {
    return (
      <View style={styles.canvas}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.text}>
              {this.props.stock.symbol}
            </Text>
            <Text style={styles.text}>
              {this.props.stock.name}
            </Text>
          </View>
          <View style={styles.buySell}>
            <Button title="Buy" color="green" onPress={()=>navigator.push(1)}></Button>
            <Button title="Sell" color="red" ></Button>
          </View>
          <View style={styles.price}>
            <Text style={styles.text}>
              ${this.props.stock.share_price}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  canvas: {
    height: 50,
    width: 200
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  text: {
    color: 'white'
  },
  price: {

  },
  info: {

  },
  buySell: {

  },


});
