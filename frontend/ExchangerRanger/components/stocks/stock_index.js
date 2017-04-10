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
    const {currentUser} = this.props;
    return (
      <View>
      <View style={styles.userBanner}>
        <Text style={styles.userUsername}>{currentUser.username}</Text>
        <Text style={styles.userNetWorth}>${currentUser.net_worth}</Text>
        <Text style={styles.userNetChange}>
        {((Math.round((10000 - currentUser.net_worth) * 100)/100) > 10000) ?
          `+${(Math.round((10000 - currentUser.net_worth) * 100)/100)}` :
          `-${(Math.round((10000 - currentUser.net_worth) * 100)/100)}`

        }&nbsp;
        {`(${(Math.round(currentUser.net_worth - 10000)/100)}%) PAST MONTH`}
        </Text>
      </View>
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
      {this.state.stocks.map(stock => <StockIndexItemContainer stock={stock} key={stock.id}
        navigator={this.props.navigator}/>)}

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'flex-start',
    borderRadius: 2,
  },
  search: {
    height: 35,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,

  },
  userBanner: {
    marginTop: 18,
    height: 80,
    backgroundColor: '#74B530',

  },
  userUsername: {
    fontFamily: 'GillSans-Light',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    color: 'white',
  },
  userNetWorth: {
    fontFamily: 'GillSans-Light',
    fontSize: 36,
    textAlign: 'center',
    color: 'white',
  },
  userNetChange: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
});
