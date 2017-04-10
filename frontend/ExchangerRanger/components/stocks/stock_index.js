import axios from 'axios';
import React, { Component } from 'react';
import StockIndexItemContainer from './stock_index_item_container';
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
      stocks: this.props.stocks.slice(0,5)
    };
    this.filterResults=this.filterResults.bind(this);
  }

  componentDidMount(){
    //updatePrices

    // this.props.fetchCompanies();
    this.updateStocks();
  }

  updateStocks(){
    this.state.stocks.forEach(stock => {
      axios.patch(`http://localhost:3000/api/companies/${stock.id}`);
    });
  }

  filterResults(value){
    // console.log(value);
    // console.log(this.state);
    // console.log(companies);
    this.setState({stocks:[]});
    let stocks = [];
    let i = 0;
    let stock;
    while (stocks.length < 6 && i< this.props.stocks.length){
      stock = this.props.stocks[i];
      if(stock.name.toLowerCase().includes(value.toLowerCase())
        ||stock.symbol.toLowerCase().includes(value.toLowerCase())){
          axios.patch(`http://localhost:3000/api/companies/${stock.id}`);
          stocks.push(stock);
        }
      i++;
    }
    this.setState({stocks: stocks});


    // this.setState({stocks: companies.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase())
    //   ||stock.symbol.toLowerCase().includes(value.toLowerCase()))});
  }

  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <SearchBar style={styles.search}
          ref='searchBar'
	        placeholder='Search'
          onChangeText={this.filterResults}
        />

        <TouchableHighlight
          onPress={() => this.props.navigator.push({id: 'Leaderboard'})}
          underlayColor='#FFFFFE'
          activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>
              Leaderboard
            </Text>
          </View>
        </TouchableHighlight>
      {this.state.stocks.map(stock => <StockIndexItemContainer stock={stock} key={stock.id}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18,
    alignItems: 'flex-start'
  },
  search: {
    height: 35,
    alignSelf: 'stretch',
  }
});
