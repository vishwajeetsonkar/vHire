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
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import style from "../../components/login/style";
export class LoginScreenDetail extends Component {
  state = {
    isEmailFocused: false,
    isPasswordFocused: false,
  };
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

  render() {
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  loginView: {
    position: "absolute",
    top: 125,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 40,
  },
  scrollViewWrapper: {
    flex: 1,
  },
  loginHeader: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 28,
    color: "black",
    paddingTop: 10,
    paddingBottom: 5,
  },
  linkedinLogo: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 30,
    color: "blue",
    paddingTop: 20,
    paddingBottom: 20,
    textShadowOffset: { width: 5, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.7,
  },
  loginBox: {
    padding: 30,
  },
  label: {
    color: "black",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
  },
  form: {
    padding: 20,
  },
  input: {
    color: "black",
    lineHeight: 1.2,
    fontSize: 13,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  wrapInput: {
    backgroundColor: "black",
    // border: "1px solid white",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
  },
  formItem: {
    marginRight: 5,
    marginBottom: 30,
  },
  formLabel: {
    fontSize: 11,
    marginBottom: 4,
    fontWeight: "600",
    color: "grey",
  },
  formInput: {
    borderRadius: 5,
    width: Dimensions.get("window").width - 75,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingHorizontal: 25,
    color: "grey",
  },
  formInputEmailFocused: {
    borderRadius: 5,
    width: Dimensions.get("window").width - 75,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    paddingHorizontal: 25,
    color: "blue",
  },
  formInputPasswordFocused: {
    borderRadius: 5,
    width: Dimensions.get("window").width - 75,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    paddingHorizontal: 25,
    color: "blue",
  },
  signInBtn: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 16,
    paddingTop: 12,
    paddingRight: 30,
    paddingBottom: 12,
    paddingLeft: 30,
    borderWidth: 1,
    width: Dimensions.get("window").width / 2,
    textAlign: "center",
    borderRadius: 25,
    marginTop: 20,
  },
});
