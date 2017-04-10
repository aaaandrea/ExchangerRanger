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
    this.props.fetchCompanies();
    this.setState({stocks: this.props.stocks.slice(0,6)});
  }

  updateStocks(){
    this.state.stocks.forEach(stock => axios.patch(`http://localhost:3000/api/companies/${stock.id}`));
  }

  filterResults(value){
    // console.log(value);
    // console.log(this.state);
    let companies = [];
    this.props.stocks.forEach(company => companies.push(company));
    // console.log(companies);

    this.setState({stocks: companies.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase())
      ||stock.symbol.toLowerCase().includes(value.toLowerCase()))});
  }

  render() {
    const {stocks} = this.props;
    const currentUser = {username: "nedders", net_worth: 8239.23};
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
      {stocks.slice(0,5).map(stock => <StockIndexItem stock={stock} key={stock.id}/>)}
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
