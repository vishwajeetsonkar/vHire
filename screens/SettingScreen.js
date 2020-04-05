import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import AppBarComponent from '../components/appBarComponent';
export class SettingScreen extends Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
        <AppBarComponent title="Setting" navigation={navigation} />
        <List.Section title="About Us">
          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded}
            onPress={this._handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>
    );
  }
}