import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

class MyApp extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image 
                    source={require('../assets/welcome.png')}
                    style={{flex: 1, height:null, width: null}}
                    />
                </View>
                <View style={{height: height/3}}>
                    <View style={styles.button}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}
                        onPress={() => this.props.navigation.navigate('login')}
                        >SIGN IN</Text>
                    </View>
                    <View style={{...styles.button, backgroundColor: '#0e76a8'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>SIGN IN WITH LINKEDIN</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default MyApp;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
})