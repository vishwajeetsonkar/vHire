import React, { Component } from 'react';
import { Text, Appbar, Card, Avatar, Paragraph, Title, Button, IconButton } from 'react-native-paper';
import AppBarComponent from '../../components/appBarComponent';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BottomNavigationComponent from '../../components/bottonNavigation';
import { Video } from 'expo-av';

const {width} = Dimensions;
export default class UserProfileComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppBarComponent title="Sachin" navigation={this.props.navigation}/>
                <ScrollView>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: width, height: 300 }}
                    />
                </ScrollView>
                <BottomNavigationComponent></BottomNavigationComponent>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    card: {
        margin: 10
    },
    userAvater: {
        height: 150,
        width: 150
    },
    footer: {
        position: 'absolute', left: 0, right: 0, bottom: 0
    },
})