import React, { Component } from "react";
import { Card, Title, Button, Text, List } from "react-native-paper";
import AppBarComponent from "../../components/appBarComponent";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Video } from "expo-av";
import style from "./userVideoesStyle";
import axios from "../../services/axios";
import { environment } from "../../environment/environment";
export class UserVideosList extends Component {
  state = {
    videoesToUpload: []
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
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  getPermissionAsync_ForCamera = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickVideo = async () => {
    let videoDetails = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!videoDetails.cancelled) {
      let videoes = this.state.videoesToUpload;
      videoDetails.contentType = videoDetails.uri.substr(
        videoDetails.uri.lastIndexOf(".") + 1
      );
      videoDetails.id = this.state.videoesToUpload.length + 1;
      videoes.push(videoDetails);
      this.setState({ videoesToUpload: videoes });
      console.log(this.state.videoesToUpload);
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
  };

  urltoFile = (url, filename, mimeType) => {
    return newFetch(url)
      .then(function(res) {
          console.log({res});
        return res.arrayBuffer();
      })
      .then(function(buf) {
        return new File([buf], filename, {
          type: mimeType
        });
      });
  };

  uploadToS3 = (url, uri, type) => {
    const headers = { "Content-Type": type, "x-amz-acl": "public-read" };
    return new Promise((resolve, reject) => {
      axios
        .put(url, { file: imageData }, headers)
        .then(res => {
          if (res.url) {
            resolve(res);
          } else {
            reject("no url");
          }
        })
        .catch(err => {
          console.log({ err });
        });
      //   this.http
      //     .request(req)
      //     .toPromise()
      //     .then((res: any) => {
      //       if (res.url) {
      //         resolve(res);
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       reject(err);
      //     });
    });
  };

  upload = async () => {
    let files = JSON.parse(JSON.stringify(this.state.videoesToUpload));
    files.forEach(file => {
      delete file.uri;
    });
    let data = {
      folderName: "videoes",
      userId: 1,
      bucketName: "appveil",
      files
    };
    axios
      .post(`${environment.baseUrl}/api/common/getPresignedUrl`, { data })
      .then(async results => {
        // results = JSON.parse(JSON.stringify(results.data));
        // console.log(results.data[0]);
        for (const presinedURL of results.data) {
          console.log({ presinedURL });
          let index = this.state.videoesToUpload.findIndex(
            video => video.id === presinedURL.id
          );
          if (index > -1) {
              let data = new FormData();
              data.append('file', { uri: this.state.videoesToUpload[index].uri, name: presinedURL.fileName, type: `${presinedURL.type}/${presinedURL.contentType}`,presinedURL });
              console.log({data})
            axios.post(`${environment.baseUrl}/api/common/uploadVideo`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            .then(res => {
                console.log({res});
            })
            .catch(err => {
                console.log(JSON.stringify(err), '....');
            })
            // const fileData = await this.urltoFile(
            //   this.state.videoesToUpload[index].uri,
            //   presinedURL.hash,
            //   presinedURL.contentType
            // );
            // await this.requestBlob(this.state.videoesToUpload[index].uri).then(re => console.log(re)).catch(error => errors.push(error));
            // console.log(this.state.videoesToUpload[index].uri);
            // let a = await this.urlToBlob(this.state.videoesToUpload[index].uri);
            // console.log('------------------------', a);

            // const s3 = await this.uploadToS3(
            //   presinedURL.url,
            //   fileData,
            //   presinedURL.contentType
            // );
            // const url = s3.url.split("?")[0];
            // console.log({ url });
          }
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    let { image, videoesToUpload } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fbfcfd" }}>
          <AppBarComponent title="Videos" navigation={navigation} />
        </View>
        <View style={style.mainContainer}>
          <Button
            style={style.uploadBtn}
            icon="camera"
            mode="contained"
            onPress={this._pickVideo}
          >
            Select Video
          </Button>
        </View>
        <View style={style.selectedVidBox}>
          {videoesToUpload.length
            ? videoesToUpload.map(video => {
                return (
                  <Video
                    source={{ uri: video.uri }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping
                    style={{ width: 300, height: 300 }}
                    key={video.id}
                  />
                );
              })
            : null}
        </View>
        <TouchableHighlight style={{ flex: 1 }} onPress={this.upload}>
          <Text>Upload</Text>
        </TouchableHighlight>
        {/* <ScrollView> */}
        {/* <List.Section title="Click Upload to select a video"> */}
        {/* <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                            <Button icon="camera" mode="contained" onPress={this._pickVideo}>
                                Select Video
                            </Button>
                        </View>
                        
                            {
                                videoesToUpload.length && videoesToUpload.map(video => {
                                    
                                    return <View>
                                    <Video source={{ uri: video.uri }}
                                    rate={1.0}
                                    volume={1.0}
                                    isMuted={true}
                                    resizeMode="cover"
                                    shouldPlay={false}
                                    isLooping
                                    style={{ width: 300, height: 300 }} />
                                    </View>
                                })
                            } */}

        {/* </List.Section> */}
        {/* </ScrollView> */}
      </View>
    );
  }
}
