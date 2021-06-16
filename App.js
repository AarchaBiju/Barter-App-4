import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import HomeScreen from './Screens/HomeScreen'
import ExchangeScreen from './Screens/ExchangeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    ExchangeScreen: {screen: ExchangeScreen},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "ExchangeScreen"){
          return(
            <Image
            source={require("./assets/ads-icon.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen: SignupLoginScreen},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
