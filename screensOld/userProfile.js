import React, { Component } from 'react';
import { Chip, Paragraph } from 'react-native-paper';
import AppBarComponent from '../components/appBarComponent';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BottomNavigationComponent from '../components/bottonNavigation';
import { Video } from 'expo-av';

const {width} = Dimensions;
export default class UserProfileComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
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
                    <View style={styles.chip}>
                        <Chip>New</Chip>
                        <Chip>Rate</Chip>
                        <Chip>Add to MyList</Chip>
                        <Chip>Share</Chip>
                    </View>
                    <View style={styles.info}>
                        <Paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                        of Lorem Ipsum.
                        </Paragraph>
                    </View>
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
    chip: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    info:{
        margin: 10
    },
})