
import React,{ Component } from 'react';
import { StyleSheet, Text, Image,View ,TextInput, TouchableOpacity,Alert,Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExchangeScreen from '../Screens/ExchangeScreen';



export const AppTabNavigator  = createBottomTabNavigator ({
    HomeScreen: {
        screen: HomeScreen,
       
    },
    ExchangeScreen: {
        screen: ExchangeScreen,
      
    },

})
   