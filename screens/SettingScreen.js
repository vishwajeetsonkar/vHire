import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import {CustomHeader} from '../components';

export class SettingScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
              <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Detail!</Text>
                <TouchableOpacity style={{marginTop:20}}
                onPress={() => this.props.navigation.navigate('SettingDetail')}>
                  <Text>Go Setting Detail</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}