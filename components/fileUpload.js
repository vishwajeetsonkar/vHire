import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class FileUpload extends React.Component {

  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    const {type} = this.props.route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
          
        <Button
          title="Pick an image from camera roll"
          onPress={this._clickPicture}
        /> : 
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        }
      </View>
    );
  }

  componentDidMount() {
    const { type } = this.props.route.params;
    switch (type) {
      case 'gallary':
        this.getPermissionAsyncGallery();
        break;

      default:
        this.getPermissionAsync_ForCamera();
        break;
    }
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
}