import React, { Component } from 'react';
import { Card, Title, Button, Text, List } from 'react-native-paper';
import AppBarComponent from '../../components/appBarComponent';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export class UserVideosList extends Component {

    state = {
        image: null,
    };

    componentDidMount() {
        // const { type } = this.props.route.params;
        // switch (type) {
        // case 'gallary':
        this.getPermissionAsyncGallery();
        // break;

        // default:
        this.getPermissionAsync_ForCamera();
        // break;
        // }
    }


    getPermissionAsyncGallery = async () => {
        if (Constants.platform.ios || Constants.platform.android) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    getPermissionAsync_ForCamera = async () => {
        if (Constants.platform.ios || Constants.platform.android) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    _clickPicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    render() {
        let { image } = this.state;
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#fbfcfd' }}>
                <AppBarComponent title="Videos" navigation={navigation} />
                <ScrollView>
                    <List.Section title="Click Upload to select a video">
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                            <Button icon="camera" mode="contained" onPress={this._pickImage}>
                                Upload
                            </Button>
                        </View>
                        <View>
                            {image &&
                                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>
                    </List.Section>
                </ScrollView>
            </View>

        )
    }
}