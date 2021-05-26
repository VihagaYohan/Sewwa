import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// screens
import HomeScreen from '../screens/MainScreens/PropertyScreen'
import ProfileScreen from '../screens/MainScreens/ProfileScreen'
import MessageScreen from '../screens/MainScreens/MessageScreen'
import SettingsScreen  from  '../screens/MainScreens/SettingsScreen'



const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
       <BottomTab.Navigator>
           <BottomTab.Screen name="HomeScreen" component={HomeScreen}/>
           <BottomTab.Screen name="ProfleScreen" component={ProfileScreen}/>
           <BottomTab.Screen name="MessageScreen" component={MessageScreen}/>
           <BottomTab.Screen name="SettingsScreen" component={SettingsScreen}/>
       </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    
})

export default BottomTabNavigator