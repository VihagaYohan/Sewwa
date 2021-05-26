import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// components
import {Container, IoniconIcon} from '../../components/';

// constants
import {width, height, normalizeSize, COLORS} from '../../constants';

const WelcomeScreen = ({navigation, route}) => {
  return (
    <Container>
      <Text style={{fontSize: normalizeSize(25)}}>welcome screen</Text>
      <IoniconIcon name="add" color={COLORS.red} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
