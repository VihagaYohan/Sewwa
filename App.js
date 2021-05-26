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

// screens
import WelcomeScreen from './app/screens/AuthScreens/WelcomeScreen';

const App = () => {
  return <WelcomeScreen />;
};

const styles = StyleSheet.create({});

export default App;
