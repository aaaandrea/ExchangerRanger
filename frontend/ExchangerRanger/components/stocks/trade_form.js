import renderIf from '../../renderif';
import React, { Component } from 'react';
import { merge } from 'lodash';
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
      id: 0,
      status:true,
      amount: 0,
      orderType: 'buy',
      holding: {
        user_id: 0,
        company_id: 0,
        amount: 0
      }
    };
  }

  componentDidMount(){
    this.state.holding.user_id = this.props.currentUser.id;
    this.state.holding.company_id = this.props.stock.id;

    Object.values(this.props.currentUser.holdings).forEach(holding =>{
      if (holding.company_id === this.props.stock.id){
        this.setState({id: holding.id});
      }
    });
    // if (this.props.currentUser.holdings.includes())
  }

  toggleStatus(){
    this.setState({
      status: !this.state.status
    });
  }

  submitOrder(){
    let holding = merge({},this.state.holding);
    let userHoldings = [];

    Object.keys(this.props.currentUser.holdings).forEach
    (id => userHoldings.push(this.props.currentUser.holdings[id].company_id));

    console.log(userHoldings);
    this.setState({holding: holding});
    console.log(holding);

    if (userHoldings.includes(holding.company_id)) {
      let prevHolding;
      this.props.currentUser.holdings.forEach( id => {
        if(this.props.currentUser.holdings[id].company_id === holding.company_id) {
          prevHolding = this.props.currentUser.holdings[id];
        }
      });

      holding.amount += prevHolding.amount;

      this.props.updateHolding({holding: holding});
    } else {
      this.props.createHolding({holding: holding});
    }
  }

  onChanged(text) {
    let orderType = this.state.orderType;
    let shareAmount = orderType==="sell"? - text : text;
    this.setState({amount: text});
    this.setState({amount: shareAmount });
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
          <Button title="x" onPress={()=>this.toggleStatus()}></Button>
          <View style={styles.textInputContainer}>
            <TextInput
            style={styles.textInput}
            keyboardType = 'numeric'
            onChangeText = {(text)=> this.onChanged(text)}
            value = {this.state.myNumber}
            />
          </View>

          <Button title="v" onPress={()=>this.submitOrder()}></Button>

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
