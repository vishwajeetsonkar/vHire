import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AppBarComponent from '../../components/appBarComponent';

export class UserHomeScreen extends Component {
    constructor() {
        super();
        
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1}}>
                <AppBarComponent title="UserName" navigation={navigation} />
                <Button title="View Profile" onPress={() => this.props.navigation.navigate("UserDetail")} />
            </View>

        )
    }
}