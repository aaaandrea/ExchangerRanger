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
          <Text style={styles.text}>
            {this.props.stock.symbol}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  canvas: {
    height: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white'
  }

});
