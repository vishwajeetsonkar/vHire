import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State, TextInput} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate
  } = Animated;
  
  function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position
    ]);
  }

class MyApp extends Component {

    constructor() {
        super();
        this.buttonOpacity = new Value(1);
        this.onStateChange = event([
            {nativeEvent: ({state}) => block([
                cond(eq(state, State.END), set(this.buttonOpacity , 0))
            ])}
        ]);
        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
          });
        
          this.bgY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 3, 0],
            extrapolate: Extrapolate.CLAMP
          });
         
          this.textInputZIndex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            extrapolate: Extrapolate.CLAMP
          });

          this.textInputY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP
          });
          
          this.textInputOpactiy = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
          });
    }
    
    render() {

        return (
            <View style={{flex:1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image 
                    source={require('../assets/bg.jpg')}
                    style={{flex: 1, height:null, width: null}}
                    />
                </View>
                <View style={{height: height/3}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{...styles.button,
                             opacity: this.buttonOpacity,
                             transform: [{ translateY: this.buttonY }]}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}
                            // onPress={() => this.props.navigation.navigate('demo')}
                            >SIGN IN</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <Animated.View style={{...styles.button, backgroundColor: '#0e76a8'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>SIGN IN WITH LINKEDIN</Text>
                    </Animated.View>

                    <Animated.View style={{height: height / 3,
                    zIndex: this.textInputZIndex,
                    opacity: this.textInputOpactiy,
                    transform:[{translateY:this.textInputY}],
                    ...StyleSheet.absoluteFill, top: null, justifyContent: 'center'}}>
                        <TextInput 
                        placeholder="Email"
                        style={styles.textInput}
                        placeholderTextColor="black"
                        />
                        <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        placeholderTextColor="black"
                        />
                    </Animated.View>

                    <Animated.View style={styles.button}>
                        <Text> SIGN IN</Text>
                    </Animated.View>

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
    },
    textInput: {
        height:50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
    }
})