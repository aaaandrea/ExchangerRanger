// regiestering a user

import React, {
  Component,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class Register extends Component {
  constructor() {
    super();

    this.sate = {
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
        <TextInput
          onChangeText={(val) => this.setState({username: val})}
          style={styles.input} placeholder="Username"
        />
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input} placeholder="Password"
        />
        <TextInput
          onChangeText={(val) => this.setState({password_confirmation: val})}
          style={styles.input} placeholder="Password Confirmation"
        />
        <Text>
          Login or Signup!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Register;
