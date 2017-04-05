import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
      <View style={styles.registerContainer}>
        <View style={styles.inputOuter}>
          <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({username: username})}
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="green"
          />
        </View>
        <View>
          <TextInput
            onChangeText={(val) => this.setState({password: val})}
            value={this.state.password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="green"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    textAlign: 'center',
    color: 'red',
    height: 30,
    width: 90,
    marginBottom: 20,
  },

  inputOuter: {
    margin: 10,
  }

});
