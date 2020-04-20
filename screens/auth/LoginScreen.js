import React, { Component } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Form,
  Button,
} from "native-base";
import { ActivityIndicator, Colors, Snackbar } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../components/login/style";
import axios from "../../services/axios";
import { environment } from "../../environment/environment";

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
  };
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      error: null,
      isEmailFocused: false,
      isPasswordFocused: false,
    };
    this.props = props;
  }

  handleLogin = () => {
    axios(`${environment.baseUrl}/api/user/login`, {
      method: "POST",
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then(async ({ data }) => {
        try {
          for (let key in data.result) {
            await AsyncStorage.setItem(key, data.result[key]);
          }
          await AsyncStorage.setItem("token", data.token);
          this.props.navigation.navigate("HomeApp");
        } catch (e) {
          console.log({ e });
        }
      })
      .catch((err) => {
        let error = err.response.data;
        if (error.status === 401 || error.status === 404) {
          this.setState({ error: error.errorMessage });
        } else {
          this.setState({ error: "Login Failed" });
        }
      });
  };

  _storeData = async (token, id, email) => {
    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("id", id);
      await AsyncStorage.setItem("email", email);
    } catch (error) {
      // Error saving data
      console.log("error storing data");
    }
  };
  _onDismissSnackBar = () => {
    this.setState({ error: null });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <Container style={styles.wrapper}>
        <View style={{ flex: 1 }}>
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
                    <View
                      style={{ flexDirection: "row", position: "relative" }}
                    >
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
                        onChangeText={(email) => this.setState({ email })}
                        value={email}
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType="go"
                      />
                    </View>
                  </View>
                  <View style={styles.formItem}>
                    <Text style={styles.formLabel}>Password</Text>
                    <View
                      style={{ flexDirection: "row", position: "relative" }}
                    >
                      <MaterialIcons
                        name={
                          this.state.isPasswordFocused
                            ? "lock-outline"
                            : "lock-open"
                        }
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
                        onChangeText={(password) => this.setState({ password })}
                        value={password}
                        ref={(input) => this.passwordInput = input}
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
                      style={[
                        styles.signInBtn,
                        !this.state.email.length || !this.state.password.length
                          ? styles.disabledSignIn
                          : "",
                      ]}
                      onPress={() =>
                        this.state.email.length &&
                        this.state.password.length &&
                        this.handleLogin()
                      }
                    >
                      Sign In
                    </Text>
                  </View>
                </Form>
              </KeyboardAwareScrollView>
            </Content>
          </View>
        </View>
        <Snackbar
          visible={error}
          duration={5000}
          onDismiss={this._onDismissSnackBar}
        >
          {error}
        </Snackbar>
      </Container>
    );
  }
}
