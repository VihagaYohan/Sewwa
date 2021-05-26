/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

// navigator
import AuthNavigator from './app/navigator/AuthNavigator';
import BottomTabNavigator from './app/navigator/BottomNavigator';

// screens
import WelcomeScreen from './app/screens/AuthScreens/WelcomeScreen';


const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
