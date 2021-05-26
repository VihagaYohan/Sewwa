import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// components
import {AppText, AppTextInput} from '../../components';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const {width, height} = SIZES;

const Field = ({title, value, fieldStyle, textFieldStyle, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppTextInput
        value={value}
        style={fieldStyle}
        {...otherProps}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.25,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalizeSize(16),
    color: COLORS.gray2,
  },
});

export default Field;
