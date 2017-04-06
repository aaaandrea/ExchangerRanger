import renderIf from '../renderif';
import React, { Component } from 'react';
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

export default class TradeForm extends Component {
  constructor(){
    super();
    this.state ={
      status:true
    }
  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
  }

  render() {
    return (
      <View style={styles.form}>
      {renderIf(this.state.status)(
        <View style={styles.buySell}>
          <Button title="Buy" color="green" onPress={()=>this.toggleStatus()}></Button>
          <Text style={styles.line}>|</Text>
          <Button title="Sell" color="red" onPress={()=>this.toggleStatus()}></Button>
        </View>
      )}
      {renderIf(!this.state.status)(
        <View style={styles.input}>
          <Button title="Cancel" onPress={()=>this.toggleStatus()}></Button>
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {

  },
  input: {

  },
  line: {
    color: 'grey'
  },
  buySell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
    // padding: 23
  },

});
