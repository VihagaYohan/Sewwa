import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import {getBottomSpace, ifIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('screen');

// constants
import {COLORS} from '../constants';

// Wrapper/parent container for all screens. All the children components render within this parent/wrapper component
const Container = ({children, style}) => {
  return (
    <SafeAreaView style={[{width, height, backgroundColor: COLORS.white}]}>
      <View style={[{width, height, backgroundColor: COLORS.white}, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Container;
