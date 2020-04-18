import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, Platform } from "react-native";
import { Container, Header, Content, Item, Input, Form, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from 'react-native-paper';

export class LoginScreenDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '', 
      error: null
    }
    this.props = props;
  }

  handleLogin() {
    fetch('http://192.168.0.109:1002/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((response) => response.json())
    .then((json) => {
      if(json.status == 200) {
        console.log(json)
        this._storeData(json.token, json.result._id, json.result.email);
        this.props.navigation.navigate('HomeApp');
      } else {
        this.setState({error: "Login Failed"})
      }
    })
    .catch(err => {
      console.error(err)
    })
  }

  _storeData = async (token, id, email) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('id', id);
      await AsyncStorage.setItem('email', email);
    } catch (error) {
      // Error saving data
      console.log('error storing data');
    }
  };

  render() {
    const {email, password, error} = this.state;
    return (
      <Container style={styles.wrapper}>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/appveil_background.png")}
        ></Image>

        <View style={styles.loginView}>
          <Content style={styles.scrollViewWrapper}>
            <Text style={styles.loginHeader}>Sign In</Text>
            <KeyboardAvoidingView
              behavior={Platform.Os == "ios" ? "padding" : "height"} >
              <Form style={styles.form}>
                <View style={styles.wrapInput}>
                  <TextInput 
                    style={styles.input} 
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email})}
                    value= {email} />
                </View>
                <View style={styles.wrapInput}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                    value = {password}
                  />
                </View>
                  {error ? <View><Text style={{color: 'red'}}>{error}</Text></View> : <View><Text>{error}</Text></View>}
                <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text
                      style={{ color: "white", fontSize: 12.5, marginTop: 12 }}
                    >
                      Forgot Password ?
                    </Text>
                  </View>
                  <TouchableOpacity>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <AntDesign
                      name="rightsquareo"
                      size={40}
                      color="white"
                      onPress={() => this.props.navigation.navigate('HomeApp')}
                      // onPress={() => this.handleLogin()}
                    />
                  </View>
                  </TouchableOpacity>
                </View>
              </Form>
              </KeyboardAvoidingView>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  loginView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(42, 81, 214, 0.95)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20
  },
  scrollViewWrapper: {
    flex: 1
  },
  loginHeader: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 23,
    color: "white",
    paddingTop: 10,
    paddingBottom: 15
  },
  loginBox: {
    padding: 30
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10
  },
  form: {
    padding: 20
  },
  input: {
    color: 'black',
    lineHeight: 1.2,
    fontSize: 13,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  wrapInput: {
    backgroundColor: "white",
    // border: "1px solid white",
    borderRadius: 5,
    marginBottom: 20
  },
  button: {
    marginTop: 30
  }
});
