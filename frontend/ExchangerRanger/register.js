import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
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
          />
        </View>
        <View>
          <TextInput
            onChangeText={(val) => this.setState({password: val})}
            value={this.state.password}
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <Text>
          Login or Signup!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    borderColor: 'red',
  },
  input: {
    textAlign: 'center',
    color: '#333333',
    height: 30,
    marginBottom: 20,
  },
  inputOuter: {
    borderColor: 'red',
  }
});
