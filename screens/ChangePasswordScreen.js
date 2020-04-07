import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import AppBarComponent from '../components/appBarComponent';
import { TextInput, Button, ActivityIndicator } from 'react-native-paper';

export class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      email: '',
      error: false,
      errMsg: '',
      userId: null,
      loading: false
    };
  }

  componentDidMount() {
    this._retrieveData();
  }

  validateInput = async () => {
    if (this.state.newPassword == this.state.confirmPassword) {
      this.setState({ error: false, loading: true })
      this.updatePassword();

    } else {
      this.setState({ error: true })
      console.log(this.state.error)
    }
  }

  _retrieveData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const email = await AsyncStorage.getItem('email');

      if (id !== null && email !== null) {
        this.setState({ userId: id })
        this.setState({ email: email })
      }
    } catch (error) {
      console.log('error while fetching data from async storage', error);
    }
  };

  updatePassword() {
    console.log(this.state.loading, "state")
    fetch('http://192.168.0.109:1002/api/user/updatePassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: this.state.userId,
        confirmPassword: this.state.confirmPassword,
        password: this.state.currentPassword,
        email: this.state.email
      }),
    }).then((response) => response.json())
      .then((json) => {
        console.log(json)
        if (json.success) {
          console.log(json.success)
          this.props.navigation.navigate('HomeApp');
        } else {
          this.setState({ errMsg: "Password Update Failed" })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { navigation } = this.props;
    const { currentPassword, newPassword, confirmPassword, error, loading } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
        <AppBarComponent title="Chnage Password" navigation={navigation} />
        <View style={styles.form}>
          <TextInput
            label='Current Password'
            value={currentPassword}
            mode="flat"
            style={{ marginTop: 10 }}
            error={error}
            onChangeText={(currentPassword) => this.setState({ currentPassword })}
          />
          <TextInput
            label='new Password'
            value={newPassword}
            mode="flat"
            style={{ marginTop: 10 }}
            error={error}
            onChangeText={(newPassword) => this.setState({ newPassword })}
          />
          <TextInput
            label='Current Password'
            value={confirmPassword}
            mode="flat"
            style={{ marginTop: 10 }}
            error={error}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />

          <Button mode="contained" style={{ marginTop: 10 }} onPress={() => this.validateInput()}>
            Submit
          </Button>
          {loading &&
            <View style={styles.loading}>
              <ActivityIndicator />
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});