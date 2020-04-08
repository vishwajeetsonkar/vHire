import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserVideosList } from './screens/Videos'
import { UserListScreen, UserProfileDetail } from './screens';
import { SettingScreen, SettingScreenDetail } from './screens';
import { LoginScreenDetail, RegisterScreenDetail } from './screens/auth';
import {NotificationsScreen} from './screens/drawer';
import FileUpload from './components/fileUpload';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown: false
})
const theme = {
  Button: {
    raised: true,
  },
};


const StackUserProfile = createStackNavigator();

function UserProfileStack() {
  return (
    <Stack.Navigator initialRouteName="User"
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <StackUserProfile.Screen name="UserDetail" component={UserProfileDetail} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingScreen} options={navOptionHandler}></StackSetting.Screen>
      <StackSetting.Screen name="SettingDetail" component={SettingScreenDetail} options={navOptionHandler}></StackSetting.Screen>
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case "UserList":
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            break;
          case "UserVideosList":
            iconName = focused ? 'ios-videocam' : 'ios-videocam';
            break;
          case "Settings":
            iconName = focused ? 'ios-list-box' : 'ios-list';
            break;
          default:
            break;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="UserList" component={UserProfileStack} />
      <Tab.Screen name="UserVideosList" component={UserVideosList}/>
      <Tab.Screen name="Settings" component={SettingStack} />
  </Tab.Navigator>   
  )
}

function CustomDrawerContent(props){
  return(
    <SafeAreaView>
      <ScrollView style={{marginLeft:5}}>
      <TouchableOpacity style={{marginTop:20}}
        onPress={()=> props.navigation.navigate('ManuTab')}>
          <Text>Manu Tab</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}}
        onPress={()=> props.navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const StackApp = createStackNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="ManuTab" drawerContent={props =>CustomDrawerContent(props)}>
        <Drawer.Screen name="ManuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/welcome.png')]);

    await Promise.all([...imageAssets]);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    

    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="HomeApp">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="Login" component={LoginScreenDetail} options={navOptionHandler} />
          <StackApp.Screen name="Register" component={RegisterScreenDetail} options={navOptionHandler} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


        {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="myApp" component={MyApp} />
          <Stack.Screen name="login" component={LoginComponent} />
          <Stack.Screen name="userList" component={UserListComponent} />
          <Stack.Screen name="userProfile" component={UserProfileComponent} />
        </Stack.Navigator> */}