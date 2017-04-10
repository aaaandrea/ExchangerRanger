import axios from 'axios';
import React, { Component } from 'react';
import StockIndexItem from './stock_index_item';
import SearchBar from 'react-native-search-bar';
import {fetchCompanies} from '../../actions/stock_actions.js';
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
  constructor(props){
    super(props);
    this.state={
      stocks: this.props.stocks
    };
    this.filterResults=this.filterResults.bind(this);
  }

  componentDidMount(){
    //updatePrices
    // this.props.fetchCompanies();

    this.setState({stocks: this.props.stocks.slice(0,6)});
  }

  updateStocks(){
    this.state.stocks.forEach(stock => axios.patch(`http://localhost:3000/api/companies/${stock.id}`));
    // return this.state.stocks
  }

  filterResults(value){
    // console.log(this.props.stocks);
    this.setState({stocks: this.props.stocks.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase())
      ||stock.symbol.toLowerCase().includes(value.toLowerCase())).slice(0,6)});
    this.updateStocks();
  }

  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <SearchBar style={styles.search}
          ref='searchBar'
	        placeholder='Search'
          onChangeText={this.filterResults}
        />
      {this.state.stocks.map(stock => <StockIndexItem stock={stock} key={stock.id}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
    height: 35,
    width: 200
  }
});
