import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// components
import {Container} from '../../components/';

// constants
import {width,height,normalizeSize} from '../../constants'

const WelcomeScreen = ({navigation, route}) => {
  return (
    <Container>
      <Text style={{fontSize:normalizeSize(25)}}>welcome screen</Text>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
