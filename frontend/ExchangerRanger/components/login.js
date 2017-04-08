import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Button,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      password: this.props.password,
      errors: [],
    };
  }

  // async onRegisterPressed() {
   //   this.setState({showProgress: true})
   //   try {
   //     let response = await fetch('https://exchangerranger.com/api/users', {
   //                             method: 'POST',
   //                             headers: {
   //                               'Accept': 'application/json',
   //                               'Content-Type': 'application/json',
   //                             },
   //                             body: JSON.stringify({
   //                               user:{
   //                                 name: this.state.name,
   //                                 password: this.state.password,
   //                               }
   //                             })
   //                           });
   //     let res = await response.text();
   //     if (response.status >= 200 && response.status < 300) {
   //         //Handle success
   //         let accessToken = res;
   //         console.log(accessToken);
   //         //On success, store the access_token in the AsyncStorage
   //         this.storeToken(accessToken);
   //         this.redirect('home');
   //     } else {
   //         //Handle error
   //         let error = res;
   //         throw error;
   //     }
   //   } catch(errors) {
   //     //errors are in JSON form
   //     let formErrors = JSON.parse(errors);
   //     let errorsArray = [];
   //     for(var key in formErrors) {
   //       if(formErrors[key].length > 1) {
   //           formErrors[key].map(error =>
   //                 errorsArray.push(`${key} ${error}`));
   //       } else {
   //           errorsArray.push(`${key} ${formErrors[key]}`);
   //       }
   //     }
   //     this.setState({errors: errorsArray})
   //     this.setState({showProgress: false});
   //   }
   // }

  render() {
    return (
      <KeyboardAvoidingView style={styles.registerContainer}>
        <Text style={styles.quote}>
          "No dough, no show!"
        </Text>
        <Text style={styles.quoted}>
          - Lucky Day, The Three Amigos
        </Text>
        <View style={styles.inputOuter}>
          <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({username: username})}
            returnKeyType="next"
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="#115635"
          />
        </View>
        <View style={styles.inputOuter}>
          <TextInput
            style={styles.input}
            onChangeText={(val) => this.setState({password: val})}
            returnKeyType="go"
            keyboardType="email-address"
            autocapitalize="none"
            autoCorrect={false}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#115635"
          />
        </View>
        <View
          style={styles.buttonContainer}>
           <Button
              style={styles.button}
              title="Login"
              onPress={() => this.props.navigator.push({id: 'StockIndex'})} >
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  quote: {

  },

  quoted: {

  },


  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115635',
  },

  input: {
    height: 30,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#BBD149',
  },

  inputOuter: {
    marginBottom: 5,
  },

  buttonContainer: {
    backgroundColor: '#74B530',
    width: 200,
  },

  button: {
    textAlign: 'center',
    color: '#115635',
    fontWeight: '700',
  }

});


// <TouchableOpacity style={styles.buttonContainer}>
//   <Text style={styles.buttonText}>Signup</Text>
// </TouchableOpacity>
