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

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.registerContainer}>
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
            secureTextEntry
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autocapitalize="none"
            autoCorrect={false}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#115635"
          />
        </View>
        <View>
         <Button title="fart" onPress={() => this.props.navigator.push({id: 'Stock'})} />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4D664',
  },

  input: {
    height: 30,
    width: 90,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#BBD149',
    paddingVertical: 15,
  },

  inputOuter: {
    margin: 10,
  },

  buttonContainer: {
    backgroundColor: '#74B530',
    paddingVertical: 15,
    width: 90,
  },

  buttonText: {
    textAlign: 'center',
    color: '#115635',
    fontWeight: '700',
  }

});
