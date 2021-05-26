import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// componetns
import {
  AppText,
  AppTextInput,
  AppButton,
  Container,
  Field,
  Icon,
  IoniconIcon,
} from '../../components';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const LoginScreen = ({navigation, route}) => {
  return (
    <Container style={styles.container}>
      <IoniconIcon
        name="arrow-back"
        color={COLORS.primary}
        onPress={() => navigation.goBack()}
      />
      {/* content */}
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Register</AppText>

        {/* email */}
        <Field
          title="LAST NAME :"
          value="sample@gmail.com"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
          keyboardType="email-address"
        />

        {/* password */}
        <Field
          title="PASSWORD :"
          value="sample@gmail.com"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
          secureTextEntry={true}
        />
      </View>

      {/* register button */}
      <AppButton
        title="Login"
        buttonStyle={styles.buttonStyle}
        textFieldStyle={styles.textFieldStyle}
        textStyle={styles.textStyle}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalizeSize(10),
    paddingTop: normalizeSize(30),
  },
  buttonStyle: {
      marginTop:normalizeSize(20)
  },
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalizeSize(20),
    color: COLORS.gray3,
  },
  textFieldStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalizeSize(14),
  },
  fieldStyle: {
    backgroundColor: COLORS.gray4,
    textAlign: 'left',
    paddingLeft: normalizeSize(20),
  },
  textFieldStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalizeSize(14),
  },
});

export default LoginScreen;
