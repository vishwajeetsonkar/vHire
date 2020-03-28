import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export class CustomDrawerContent extends Component {
    render() {
        return(
            <SafeAreaView>
              <ScrollView style={{marginLeft:5}}>
              <TouchableOpacity style={{marginTop:20}}
                onPress={()=> props.navigation.navigate('ManuTab')}>
                  <Text>Manu Tab</Text>
                </TouchableOpacity>
              <TouchableOpacity style={{marginTop:20}}
                onPress={()=> props.navigation.navigate('Notifications')}>
                  <Text>Notifications</Text>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          )
    }
}