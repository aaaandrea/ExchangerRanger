
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import { Provider } from 'react-redux';
import StockIndexContainer from './components/stocks/stock_index_container';
import RegisterContainer from './components/session/register_container';
import LoginContainer from './components/session/login_container';
import SplashContainer from './splash_container';
import LeaderboardIndexContainer from './components/leaderboard/leaderboard_index_container';
import configureStore from './store/store';
// const stocks = [{symbol: "YHOO", name: "Yahoo", share_price: 50},
// {symbol: "AAPL", name: "Apple", share_price: 70},
// {symbol: "GOOG", name: "Google", share_price: 64}];

const store = configureStore();

export default class ExchangerRanger extends Component {

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
    renderScene(route, navigator) {
      var routeId = route.id;
      if (routeId === 'Splash') {
        return (
          <SplashContainer
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
            navigator={navigator} />
        );
      }
      if (routeId === 'Login') {
        return (
          <LoginContainer
            navigator={navigator}/>
        );
      }
      if (routeId === 'StockIndex') {
        return (
          <StockIndexContainer
            navigator={navigator} />
        );
      }
      if (routeId === 'Leaderboard') {
        return (
          <LeaderboardIndexContainer
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
            <Text style={{color: 'red', fontWeight: 'bold'}}>oops! try again</Text>
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
