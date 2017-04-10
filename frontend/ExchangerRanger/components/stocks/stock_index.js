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
  TouchableHighlight,
  Image
} from 'react-native';


export default class StockIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: this.props.stocks.slice(0,5)
    };
    this.filterResults = this.filterResults.bind(this);
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
    let money = currentUser.net_worth.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});

    return (
      <View>
        <View style={styles.userBanner}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({id: 'Leaderboard'})}
            underlayColor='#74B530'
            activeOpacity={0.7}>
            <View style={styles.buttonContainer}>
              <Image source={require('./../leaderboard/flag.png')}
                    style={styles.flag}
              />
            </View>
          </TouchableHighlight>
          <View style={styles.userWords}>
            <Text style={styles.userUsername}>{currentUser.username}</Text>
            <Text style={styles.userNetWorth}>{money}</Text>
            <Text style={styles.userNetChange}>
            {((Math.round((10000 - currentUser.net_worth) * 100)/100) > 10000) ?
              `+${(Math.round((10000 - currentUser.net_worth) * 100)/100)}` :
              `-${(Math.round((10000 - currentUser.net_worth) * 100)/100)}`

            }&nbsp;
            {`(${(Math.round(currentUser.net_worth - 10000)/100)}%) PAST MONTH`}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <SearchBar style={styles.search}
            ref='searchBar'
  	        placeholder='Search'
            onChangeText={this.filterResults}
          />
        {this.state.stocks.map(stock => <StockIndexItemContainer stock={stock} key={stock.id}/>)}
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
    flexDirection: 'row'
  },

  userWords: {
    flexDirection: 'column',
    alignItems: 'flex-end'
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

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B530',
    margin: 3,
    borderRadius: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: -1
    },
  },

  flag: {
    marginTop: 2,
    height: 70,
    width: 90,
    alignItems: 'center',
  },

  button: {
    textAlign: 'center',
    color: '#FFFFFE',
    fontWeight: '600',
    fontSize: 14,
  }
});
