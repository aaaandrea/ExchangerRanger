import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
  buy: {

  }

});
