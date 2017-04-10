import renderIf from '../../renderif';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TextInput
} from 'react-native';
const Platform = require('Platform');

//x button is to cancel
//v btn represents check mark to approve (functionality pending)

//sell and buy buttons will change state.ordertype to sell or buy
//confirm will do a post
//cancel will set amount back to 0
//or maybe onChanged won't set state

export default class TradeForm extends Component {
  constructor(){
    super();
    this.state ={
      status:true,
      amount: 0
    };
  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
  }

  onChanged(text) {
    this.setState({amount: text});
  }

  render() {
    // window.props=this.props;
    return (
      <View style={styles.form}>
      {renderIf(this.state.status)(
        <View style={styles.buySell}>
          <Button title="buy" color="#74B530" onPress={()=>this.toggleStatus()}></Button>
          <Text style={styles.line}>|</Text>
          <Button title="sell" color="#e05a57" onPress={()=>this.toggleStatus()}></Button>
        </View>
      )}
      {renderIf(!this.state.status)(
        <View style={styles.order}>
          <Button title="+" onPress={()=>this.toggleStatus()}></Button>
          <View style={styles.textInputContainer}>
            <TextInput
            style={styles.textInput}
            keyboardType = 'numeric'
            onChangeText = {(text)=> this.onChanged(text)}
            value = {this.state.myNumber}
            />
          </View>
          <Button title="-" onPress={()=>this.toggleStatus()}></Button>
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    paddingTop: 18,
    marginLeft: 165,
  },
  order: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  line: {
    color: 'grey'
  },
  buySell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // padding: 23
  },
  textInput: {
    height: 25,
    backgroundColor: 'white'
  },
  textInputContainer: {
    width: 35
  }

});
