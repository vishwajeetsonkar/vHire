import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Badge, Icon, Card, CardItem, Left, Thumbnail, Body} from 'native-base';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class UserProfileComponent extends Component {
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    return(
      <Container>
        <Header>
            <Title>Johnathan</Title>
        </Header>
        <Content style={styles.border}>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/profilePic.png')} />
                <Body>
                  <Text>Johnathan</Text>
                  <Text note>Full Stack Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{flex:1, flexDirection: "column", alignItems: "center"}}>
                <Image source={require('../assets/profilePic.png')} style={{height: 200, width: 200, alignItems: "center"}}/>

                <Button block>
                  <Text style={{fontSize: 20,textAlign: 'center',  justifyContent: 'center'}}>Play Introduction</Text>
                </Button>
                <Text style={{marginTop: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Left style={styles.action}>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="md-star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                  <Text>New</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                  <Text>Rate</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                  <Text>Add to MyList</Text>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="md-share-alt" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                  <Text>Share</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
          {/* <View style={styles.videoContainer}>
            <Image style={styles.video} source={require('../assets/profilePic.png')}></Image>
            <Button primary style={styles.playButton}>
                <Text style={{fontSize: 20,textAlign: 'center',  justifyContent: 'center'}}>Play Introduction</Text>
            </Button>
          </View>
            <View style={styles.action}>
                <Text>New</Text>
                <Text>Rate</Text>
                <Text>Add to My List</Text>
                <Text>Share</Text>
            </View>

            <View >
              <Text style={styles.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            </View> */}
        </Content>
            <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default UserProfileComponent;

const styles = StyleSheet.create({
  border: {
    padding: 5
  },
  button:{

  },
  videoContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  video: {
    height: 200,
    width: 300, 
    alignSelf: 'center', 
    marginBottom: 10
  },
  playButton: {
    flex:1,
    justifyContent: 'center'
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  summery: {
    flex:1, 
    justifyContent: 'center'
  }
});
