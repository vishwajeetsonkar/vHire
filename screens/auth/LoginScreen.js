import React, { Component } from "react";
// import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  AsyncStorage
} from "react-native";

import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Header, Content, Item, Input, Form, Button } from "native-base";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../components/login/style";
export class LoginScreenDetail extends Component {
  
  handleFocus = (stateVariable) => {
    let detail = {};
    detail[stateVariable] = true;
    this.setState(detail);
  };

  handleBlur = (stateVariable) => {
    let detail = {};
    detail[stateVariable] = false;
    this.setState(detail);
  }
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '', 
      error: null,
      isEmailFocused: false,
      isPasswordFocused: false,
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
        <Image style={styles.backgroundImage}></Image>

        <View style={styles.loginView}>
          <Content style={styles.scrollViewWrapper}>
            <Text style={styles.loginHeader}>Sign In</Text>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 20,
                paddingBottom: 17,
                color: "grey",
              }}
            >
              Sign In with Social Media
            </Text>
            <View>
              <AntDesign
                name="linkedin-square"
                size={60}
                color="black"
                style={styles.linkedinLogo}
              />
            </View>
            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={true}
              enableOnAndroid={true}
            >
              <Form style={styles.form}>
                <View style={styles.formItem}>
                  <Text style={styles.formLabel}>Email</Text>
                  <View style={{ flexDirection: "row", position: "relative" }}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={this.state.isEmailFocused ? "blue" : "black"}
                      style={{ position: "absolute", left: 1, top: 5 }}
                    />
                    <TextInput
                      style={
                        this.state.isEmailFocused
                          ? styles.formInputEmailFocused
                          : styles.formInput
                      }
                      onFocus={() => this.handleFocus("isEmailFocused")}
                      onBlur={() => this.handleBlur("isEmailFocused")}
                      onChangeText={(email) => this.setState({email})}
                    />
                  </View>
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formLabel}>Password</Text>
                  <View style={{ flexDirection: "row", position: "relative" }}>
                    <MaterialIcons
                      name={this.state.isPasswordFocused ? 'lock-outline' : "lock-open"}
                      size={20}
                      color={this.state.isPasswordFocused ? "blue" : "black"}
                      style={{ position: "absolute", left: 1, top: 5 }}
                    />
                    <TextInput
                      secureTextEntry={true}
                      style={
                        this.state.isPasswordFocused
                          ? styles.formInputPasswordFocused
                          : styles.formInput
                      }
                      onFocus={() => this.handleFocus("isPasswordFocused")}
                      onBlur={() => this.handleBlur("isPasswordFocused")}
                      onChangeText={(password) => this.setState({password})}
                    />
                  </View>
                </View>
          
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                >
                
                  <Text
                    style={styles.signInBtn}
                    onPress={() => console.log("Pressed")}
                  >
                    Sign In
                  </Text>
                </View>
              </Form>
            </KeyboardAwareScrollView>
          </Content>
        </View>
      </Container>
    );
  }
}
