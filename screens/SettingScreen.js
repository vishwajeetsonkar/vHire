import React, { Component } from 'react';
import { View } from 'react-native';
// import { List, Card, Paragraph, Title, Button, Avatar } from 'react-native-paper';
import AppBarComponent from '../components/appBarComponent';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export class SettingScreen extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
        <AppBarComponent title="Setting" navigation={navigation} />
            <Menu.Item onPress={() => {}} title="About Us" />
            <Divider />
            <Menu.Item onPress={() => navigation.navigate("ChangePassword")} title="Change Password" />
            <Divider />
      </View>
    );
  }
}