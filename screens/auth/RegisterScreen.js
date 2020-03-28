import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export class RegisterScreenDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
              <CustomHeader title="Registration" navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Registration Screen</Text>
              </View>
            </SafeAreaView>
          );
    }
}