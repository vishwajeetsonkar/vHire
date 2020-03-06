import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { Container, Header, Content, Item, Input, Form, Button } from 'native-base';

class LoginComponent extends Component {
  
  render() {
    return (
      
      <Container>
          <View style={styles.background}>
          <Content style={styles.scrollViewWrapper}>
            <Text style={{...styles.loginHeader, fontWeight: 'bold'}}>Log In</Text>
            <Form style={styles.form}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}/>
            <View style={styles.button}>
              <Button block light>
                <Text style={{fontSize: 20, fontWeight: 'bold'}} onPress={() => this.props.navigation.navigate('userList')}>Log In</Text>
              </Button>
            </View>
            </Form>
          </Content>
        </View>
      </Container>
    );
  }
}
export default LoginComponent;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  background: {
    display: "flex",
    flex: 1,
    backgroundColor: '#428C90',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: '#fff',
    fontWeight: "300",
    marginBottom: 40,
    textAlign: 'center'
  },
  loginBox: {
    padding: 30
  },
  label: {
    color: 'black',
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10
  },
  form: {
    padding: 20
  },
  input: {
    borderBottomColor: 'black',
    color: 'white',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  button: {
    marginTop: 30
  }
});