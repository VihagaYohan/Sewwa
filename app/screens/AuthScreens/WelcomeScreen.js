import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

// components
import {Container, IoniconIcon, AppButton} from '../../components/';

// constants
import {SIZES, normalizeSize, COLORS} from '../../constants';

const {width, height} = SIZES;

const WelcomeScreen = ({navigation, route}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/welcome.jpg')}>
      <View
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: normalizeSize(30),
          backgroundColor: COLORS.transparentRed,
        }}>
        <AppButton
          title="Register"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
        />

        <AppButton
          title="Login"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  buttonStyle: {
    marginBottom: normalizeSize(20),
    backgroundColor: COLORS.white,
  },
  textStyle: {
    fontFamily:"Poppins-SemiBold",
    fontSize: normalizeSize(20),
    color: COLORS.primary,
  },
});

export default WelcomeScreen;
