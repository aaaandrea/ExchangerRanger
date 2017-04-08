import React, { Component } from 'react';
import StockIndex from './stock_index';
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
    this.props.fetchCompanies().then( () => (
      this.setState({
        companies: this.props.companies
      })
    ));
  }

  render() {
    console.log(this.props.state);
    return (
      <View style={styles.container}>
        <StockIndex stocks={stocks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
});

// <StockIndex stocks={this.props.stocks} navigator={this.props.navigator} />
