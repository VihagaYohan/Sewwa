import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// components
import {AppTextInput, Container, AppButton} from '../../components';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const HomeScreen = ({navigation, route}) => {
  return (
    <Container>
      <AppTextInput placeholder="Enter" keyboardType="number-pad" />
      <AppButton
        title="Register"
        textStyle={{fontSize:normalizeSize(20)}}
        onPress={() => alert('Hello, world')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
