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
  AsyncStorage,
  AcitivityIndicatorIOS,
} from 'react-native';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
  }

  //
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
  //                                 username: this.state.username,
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


  onSubmission() {
    // console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    console.log(this.state);
    this.props.signup({
      user:
      {
        username: this.state.username,
        password: this.state.password
      }
    });
    this.props.navigator.push({id: 'StockIndex'});
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allContainer}>
        <Text style={styles.quote}>
          "No dough, no show!"
        </Text>
        <Text style={styles.quoted}>
          - Lucky Day, The Three Amigos
        </Text>
        <View style={styles.formContainer}>
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
        </View>
        <View
          style={styles.buttonContainer}>
           <Button
              style={styles.button}
              title="signup!"
              onPress={this.onSubmission.bind(this)} >
          </Button>
        </View>
        <View>
          <Text>
            {this.state.errors}
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115635',
  },

  quote: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 16,
    fontWeight: '700',
  },

  quoted: {
    textAlign: 'center',
    color: '#BBD149',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
    paddingBottom: 10,
  },

  formContainer: {
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
