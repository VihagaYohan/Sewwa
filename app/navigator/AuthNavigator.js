import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// screen
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AuthNavigator;
