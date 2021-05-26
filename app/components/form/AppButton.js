import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// comonents
import AppText from './AppText';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const {width, height} = SIZES;

const AppButton = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <AppText style={textStyle}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.15,
    borderRadius: normalizeSize(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
});

export default AppButton;
