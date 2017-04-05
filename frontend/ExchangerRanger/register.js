import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  }

  onRegisterPress() {
    console.log(this.state.username);
  }

  render() {
    return (
      <View>
        <View style={styles.inputOuter}>
          <TextInput
            onChangeText={(val) => this.setState({username: val})}
            value={this.state.username}
            style={styles.input}
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
        <View>
          <TextInput
            onChangeText={(val) => this.setState({password_confirmation: val})}
            style={styles.input}
            placeholder="Password Confirmation"
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
  input: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
  inputOuter: {
    borderColor: '#ececec',
  }
});

export default Register;
