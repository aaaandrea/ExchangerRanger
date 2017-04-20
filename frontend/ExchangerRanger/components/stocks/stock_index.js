import axios from 'axios';
import React, { Component } from 'react';
import StockIndexItemContainer from './stock_index_item_container';
import SearchBar from 'react-native-search-bar';
import {fetchCompanies} from '../../actions/stock_actions.js';
import {
  AppRegistry,
  ScrollView,
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
    this.updateStocks();
  }

  updateStocks(){
    this.state.stocks.forEach(stock => {
      axios.patch(`https://exchanger-ranger.herokuapp.com/api/companies/${stock.id}`);
    });
  }

  filterResults(value){
    this.setState({stocks:[]});
    let stocks = [];
    let i = 0;
    let stock;
    while (stocks.length < 15 && i< this.props.stocks.length){
      stock = this.props.stocks[i];
      if (stock.symbol.toLowerCase().slice(0, value.length).includes(`${value.toLowerCase()}`) ||
      (stock.name.toLowerCase().slice(0, value.length).includes(value.toLowerCase()))) {
        axios.patch(`https://exchanger-ranger.herokuapp.com/api/companies/${stock.id}`);
        stocks.push(stock);
      }
      i++;
    }
    this.setState({stocks: stocks});


    // this.setState({stocks: companies.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase())
    //   ||stock.symbol.toLowerCase().includes(value.toLowerCase()))});
  }

  userStats(net_worth) {
    let userSym;
    if (Math.round(net_worth - 20000) > 0) {
      userSym = "+";
    } else if (Math.round(net_worth - 20000) < 0) {
      userSym = "";
    } else {
      userSym = "~";
    }

    let userPercentage = "(" + userSym +
                          (Math.round(net_worth - 20000)/20000).toString().slice(0,4)
                          + "%)"+ " PAST MONTH";

    return userPercentage;
  }

  banner(net_worth) {
    let userNetChange = `${(Math.round((net_worth - 20000) * 100)/100).toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2})}`;
    let userSym;
    if (Math.round(net_worth - 20000) > 0) {
      userSym = "+";
    } else if (Math.round(net_worth - 20000) < 0) {
      userSym = "";
    } else {
      userSym = "~";
    }
    let userBanner = userSym + userNetChange;
    return userBanner;
  }

  render() {
    const {currentUser} = this.props;
    var _scrollView = ScrollView;
    let money = currentUser.net_worth.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
    let percentage = `${this.userStats(parseInt(currentUser.net_worth))}`;
    let banner = `${this.banner(parseInt(currentUser.net_worth))}`;
    return (
        <View style={styles.scrollFix}>
        <ScrollView
          scrollEventThrottle={200}>
          <View style={styles.bannerContainer}>
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
              <Text style={styles.userNetChange}>{banner} &nbsp;{ percentage }</Text>
            </View>
            <TouchableHighlight
              onPress={() => this.props.navigator.push({id: 'UserShow'})}
              underlayColor='#74B530'
              activeOpacity={0.7}>
              <View style={styles.button2Container}>
                <Image source={require('./ledger.png')}
                      style={styles.ledger}
                />
              </View>
            </TouchableHighlight>
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
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollFix: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    marginTop: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  userWords: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userUsername: {
    fontFamily: 'GillSans-Light',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    marginTop: 15,
    marginLeft: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: -1
    },
    borderRadius: 1,
    height: 45,
    width: 56,
  },
  button2Container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    marginTop: 15,
    marginLeft: 3,
    marginRight: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 1,
    height: 45,
    width: 56,
  },
  flag: {
    height: 40,
    width: 50,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
  },
  ledger: {
    height: 35,
    width: 50,
    marginTop: 2,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
  }
});
