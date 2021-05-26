import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// constants
import {normalizeSize, COLORS} from '../../constants';

const IconComponent = ({
  name,
  size = normalizeSize(20),
  color = COLORS.white,
  onPress,
  style,
}) => {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={[style]}
    />
  );
};

const styles = StyleSheet.create({});

export default IconComponent;
