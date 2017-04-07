
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import { login, signup } from './actions/session_actions';
import StockIndex from './components/stock_index';
import RegisterContainer from './components/register_container';
import Login from './components/login';
import StockIndexItem from './components/stock_index_item';
import Splash from './splash';
import LeaderboardIndex from './components/leaderboard/leaderboard_index';

const stocks = [{symbol: "YHOO", name: "Yahoo", share_price: 50},
{symbol: "AAPL", name: "Apple", share_price: 70},
{symbol: "GOOG", name: "Google", share_price: 64}];


export default class ExchangerRanger extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'Splash', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
      />
    );
  }
    renderScene(route, navigator) {
      var routeId = route.id;
      if (routeId === 'Splash') {
        return (
          <Splash
            navigator={navigator} />
        );
      }
      // if (routeId === 'Stock') {
      //   return (
      //     <StockIndexItem
      //       navigator={navigator} stock={stocks[0]} />
      //   );
      // }
      if (routeId === 'Register') {
        return (
          <RegisterContainer
            navigator={navigator}/>
        );
      }
      if (routeId === 'Login') {
        return (
          <Login
            navigator={navigator} login={login}/>
        );
      }
      if (routeId === 'StockIndex') {
        return (
          <StockIndex
            navigator={navigator} />
        );
      }
      if (routeId === 'Leaderboard') {
        return (
          <LeaderboardIndex
            navigator={navigator} />
        );
      }
      return this.noRoute(navigator);
    }
    noRoute(navigator) {
      return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigator.pop()}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>thing</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//
// <Text style={styles.instructions}>
//   To get started, edit index.ios.js
// </Text>
// <Text style={styles.instructions}>
//   Press Cmd+R to reload,{'\n'}
//   Cmd+D or shake for dev menu
// </Text>

AppRegistry.registerComponent('ExchangerRanger', () => ExchangerRanger);
