import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import {CustomHeader} from '../components';
import { Card, Paragraph, Title } from 'react-native-paper';
import AppBarComponent from '../components/appBarComponent';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

export class HomeScreen extends Component {
    render() {
        return (
            // <SafeAreaView style={{ flex: 1 }}>
            //     <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
            //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //         <Text>Home!</Text>
            //         <TouchableOpacity style={{ marginTop: 20 }}
            //             onPress={() => this.props.navigation.navigate('HomeDetail')}>
            //             <Text>Go Home Detail</Text>
            //         </TouchableOpacity>
            //     </View>
            // </SafeAreaView>
            <View style={{flex: 1}}>
            <AppBarComponent title="Search" navigation={this.props.navigation}/>
            <ScrollView>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.card} 
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <View style={styles.container}>
                        <Image style={styles.userAvater} source={require('../assets/userAvatar.png')} />
                        <Card.Content>
                            <Title>Sachin</Title>
                            <Paragraph>Full Stack Developer</Paragraph>
                        </Card.Content>
                    </View>
                </Card>
            </ScrollView>
         </View>

        )
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