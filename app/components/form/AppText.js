import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.textStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: normalizeSize(14),
    fontFamily: 'Poppins-Medium',
    color: COLORS.gray3,
  },
});

export default AppText;
