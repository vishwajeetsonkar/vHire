import React, { Component } from "react";
// import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Form,
  Button
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export class LoginScreenDetail extends Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/appveil_background.png")}
        ></Image>

        <View style={styles.loginView}>
          <Content style={styles.scrollViewWrapper}>
            <Text style={styles.loginHeader}>Sign In</Text>
            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={true}
              enableOnAndroid={true}
            >
              <Form style={styles.form}>
                <View style={styles.wrapInput}>
                  <TextInput style={styles.input} placeholder="Email" value=''/>
                </View>
                <View style={styles.wrapInput}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    value=''
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text
                      style={{ color: "white", fontSize: 12.5, marginTop: 12 }}
                    >
                      Forgot Password ?
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <AntDesign
                      name="rightsquareo"
                      size={40}
                      color="white"
                      onPress={() => this.props.navigation.navigate("HomeApp")}
                    />
                  </View>
                  {/* <Button block light>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold" }}
                    onPress={() => this.props.navigation.navigate("HomeApp")}
                  >
                    Log In
                  </Text>
                </Button> */}
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
