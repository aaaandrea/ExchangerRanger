import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class UserShow extends Component {

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
    console.log(currentUser);
    let money = currentUser.net_worth.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
    let percentage = `${this.userStats(parseInt(currentUser.net_worth))}`;
    let banner = `${this.banner(parseInt(currentUser.net_worth))}`;
    return (
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
            onPress={() => this.props.navigator.push({id: 'Home'})}
            underlayColor='#74B530'
            activeOpacity={0.7}>
            <View style={styles.button2Container}>
              <Image source={require('./receipt.png')}
                    style={styles.ledger}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
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
