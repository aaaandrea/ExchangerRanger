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
      orderType: 'buy',
      user_id: 0,
      company_id: 0,
      amount: 0
    };
  }

  toggleStatus(type){
    this.setState({
      status: !this.state.status,
      orderType: type
    });

  }

  submitOrder(){
    const holding = {
      user_id: this.props.currentUser.id,
      company_id: this.props.stock.id,
      amount: parseInt(this.state.amount)*(this.state.orderType==='sell' ? -1 : 1)
    };

    let userHoldings = [];

   Object.keys(this.props.currentUser.holdings).forEach
   (id => userHoldings.push(this.props.currentUser.holdings[id].company_id));


   if (userHoldings.includes(holding.company_id)) {
     let prevHolding;
     this.props.currentUser.holdings.forEach( co => {
       if(co.company_id === holding.company_id) {
         prevHolding = co;
       }
     });
     holding.id = prevHolding.id;
     holding.amount += parseInt(prevHolding.amount);

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

    return (
      <View style={styles.form}>
      {renderIf(this.state.status)(
        <View style={styles.buySell}>
          <Button title="buy" color="#74B530" onPress={()=>this.toggleStatus('buy')}></Button>
          <Text style={styles.line}>|</Text>
          <Button title="sell" color="#e05a57" onPress={()=>this.toggleStatus('sell')}></Button>
        </View>
      )}
      {renderIf(!this.state.status)(
        <View style={styles.order}>
          <Button title="x" onPress={()=>this.toggleStatus()}></Button>
          <View style={styles.textInputContainer}>
            <TextInput
            style={styles.textInput}
            keyboardType = 'numeric'
            onChangeText = {(amount)=> this.setState({amount})}
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
  },
  textInput: {
    height: 25,
    backgroundColor: 'white'
  },
  textInputContainer: {
    width: 35
  }
});
