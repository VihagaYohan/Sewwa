import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants/index';

const {width, height} = SIZES;

const AppTextInput = ({placeholder, value, ...otherProps}) => {
  return (
    /*  <View style={styles.container}>
      
    </View> */
    <TextInput
      style={styles.text}
      placeholder={placeholder}
      value={value}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.2,
    borderWidth: 1,
    borderRadius: normalizeSize(50),
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    height: width * 0.16,
    borderRadius: normalizeSize(40),
    borderWidth: 1,
    color: COLORS.black,
  },
});

export default AppTextInput;
