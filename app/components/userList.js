import React, { Component } from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import AppBarComponent from '../../components/appBarComponent';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import BottomNavigationComponent from '../../components/bottonNavigation';

export default class UserListComponent extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <AppBarComponent title="Search" navigation={this.props.navigation}/>
                <ScrollView>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
                    <Card style={styles.card} 
                    onPress={() => this.props.navigation.navigate('userProfile')}>
                        <View style={styles.container}>
                            <Image style={styles.userAvater} source={require('../../assets/userAvatar.png')} />
                            <Card.Content>
                                <Title>Sachin</Title>
                                <Paragraph>Full Stack Developer</Paragraph>
                            </Card.Content>
                        </View>
                    </Card>
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
      }
})