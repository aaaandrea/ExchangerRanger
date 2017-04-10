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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    // const { navigate } = this.props.navigation;
    if (nextProps.loggedIn) {
      // navigate('StockIndex');
      this.props.navigator.pop();
      this.props.navigator.push({id: 'StockIndex'});
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.navigator.push({id: 'StockIndex'});
    }
  }

  onSubmission() {
    const user = Object.assign({}, this.state);
    this.props.login(user);
    // this.props.navigator.push({id: 'StockIndex'});
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allContainer}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "No dough, no show!"
          </Text>
          <Text style={styles.quoted}>
            - Lucky Day, The Three Amigos
          </Text>
      </View>
        <View style={styles.formContainer}>
          <View style={styles.inputOuter}>
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({username: username})}
              returnKeyType="next"
              keyboardType="email-address"
              autocapitalize="none"
              autoCorrect={false}
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
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#115635"
            />
          </View>
        </View>

        <TouchableHighlight
          onPress={this.onSubmission.bind(this)}
          underlayColor='#FFFFFE'
          activeOpacity={0.7}>
          <View
            style={styles.buttonContainer}>
             <Text
                style={styles.button}>
                Login
             </Text>
          </View>
        </TouchableHighlight>

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
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  quoteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 200,
    height: 75,
    backgroundColor: '#74B530',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },

  quote: {
    margin: 6,
    textAlign: 'center',
    color: '#F5FCFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'GillSans-Light',
    letterSpacing: 1,
  },

  quoted: {
    textAlign: 'center',
    fontFamily: 'GillSans-Light',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
    letterSpacing: 1,
    color: '#F5FCFF',
    paddingBottom: 10,
  },

  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },

  input: {
    height: 30,
    width: 200,
    textAlign: 'center',
    fontFamily: 'GillSans-Light',
    backgroundColor: '#BBD149',
    marginTop: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -1
    },
    borderRadius: 2,
  },

  inputOuter: {
    marginBottom: 5,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B530',
    height: 40,
    width: 200,
    margin: 10,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },

  button: {
    textAlign: 'center',
    color: '#FFFFFE',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'GillSans-Light',
  }

});
