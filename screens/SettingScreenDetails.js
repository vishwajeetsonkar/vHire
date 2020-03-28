import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../components';

export class SettingScreenDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
              <CustomHeader title="Setting Details" navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <TouchableOpacity
                  style={{marginTop:20}}
                >
                  <Text>Go Setting Detail</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}