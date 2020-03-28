import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export class CustomHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', height: 50, borderWidth: 1, borderColor: 'red' }}>
                <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}>
                    {
                        this.props.isHome ?
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Text>menu</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <Text>back</Text>
                            </TouchableOpacity>
                    }
                </View>

                <View style={{ flex: 1.5, justifyContent: 'center', borderColor: 'red', borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center' }}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}></View>
            </View>

        )
    }
}