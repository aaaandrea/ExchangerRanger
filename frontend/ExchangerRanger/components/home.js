import React, { Component } from 'react';
import StockIndex from './stocks/stock_index';
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
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      companies: this.props.state.companies
    };
  }

  componentDidMount() {
    this.props.fetchCompanies().then( (stocks) => (
      this.setState({
        companies: stocks
      })
    )).bind(this);
  }

  render() {
    console.log(this.state.companies);
    return (
      <View style={styles.container}>

        <StockIndex stocks={this.state.companies}/>

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
