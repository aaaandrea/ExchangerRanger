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
import LeaderboardIndexItem from './leaderboard_index_item';

export default class LeaderboardIndex extends Component {
  getMonth() {
    const d = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const currentMonth = months[d.getMonth()];
    return currentMonth;
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onSubmission() {
    this.props.navigator.push({id: 'StockIndex'});
  }

  userRanks() {

  }

  render() {
    const currentUser = this.props.currentUser;
    const {users} = this.props;
    let rank = 0;
    const currentRank = users.forEach( (user, i) => {
      if (user.username === currentUser.username) {
        rank = i + 1;
        return rank;
      }
      return rank;
    });
    let money = currentUser.net_worth.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
    return (
      <View style={styles.container}>
        <View style={styles.userBanner}>
          <TouchableHighlight
            onPress={this.onSubmission.bind(this)}
            underlayColor='#FFFFFE'
            activeOpacity={0.7}>
            <View style={styles.buttonContainer}>
               <Text style={styles.button}>
                 Home
               </Text>
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
        <View style={styles.playerRankContainer}>
          <Text style={styles.playerRanking}>
            YOUR GLOBAL RANKING
          </Text>
          <Text style={styles.playerRank}>
            {rank}
          </Text>
        </View>
        <View style={styles.leaderboardContainer}>
          <View style={styles.leaderboardBanner}>
            <Image source={require('./flag.png')}
                  style={styles.flag}
            />
            <Text style={styles.tourneyDate}>{`${this.getMonth()} Leaderboard`.toUpperCase()}</Text>
          </View>
          {
            users.map( (user, idx) => (
              <LeaderboardIndexItem player={user} rank={idx + 1} key={idx}/>
              )
            )
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 15,
  },
  userBanner: {
    marginTop: 5,
    height: 80,
    backgroundColor: '#74B530',

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
  leaderboardContainer: {
    margin: 15,
  },
  leaderboardBanner: {
    justifyContent: 'center',
    backgroundColor: '#74B530',
    height: 75,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
     height: 2,
     width: -2
   },
    borderRadius: 2,
  },
  flag: {
    marginTop: 2,
    height: 30,
    width: 40,
    alignItems: 'center',
  },
  playerRankContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  playerRank: {
    fontFamily: 'GillSans-semibold',
    fontSize: 36,
    color: '#249b09',
  },
  playerRanking: {
    fontFamily: 'GillSans-Light',
    fontSize: 20,
    letterSpacing: 2,
    color: '#8c8c8c',
  },
  tourneyDate: {
    fontFamily: 'Gill Sans',
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
  },
  leaderboardItem: {
    marginTop: 10,
    shadowColor: '#7a7b7c',
    shadowRadius: 2,
    backgroundColor: '#F5F5F5',
    borderRadius: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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

  button: {
    textAlign: 'center',
    color: '#FFFFFE',
    fontWeight: '600',
    fontSize: 14,
  }
});
