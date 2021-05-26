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

const {width, height} = SIZES;

const ConfirmationScreen = ({navigation, route}) => {
  return (
    <Container style={styles.container}>
      <IoniconIcon
        name="arrow-back"
        color={COLORS.primary}
        onPress={() => navigation.goBack()}
      />
      {/* content */}
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Confirmation</AppText>

        <AppText style={styles.message}>
          Code message has been sent to your phone number, and submit
          <AppText
            style={{fontFamily: 'Poppins-SemiBold', color: COLORS.gray2}}>
            {' '}
            OTP
          </AppText>{' '}
          code below to verify your account.
        </AppText>
        {/* email */}
        <Field
          title="OPT CODE :"
          value="1746-3429-2134"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
          keyboardType="email-address"
        />
      </View>

      {/* register button */}
      <AppButton
        title="Submit"
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
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalizeSize(20),
    color: COLORS.primary,
    marginVertical: normalizeSize(10),
  },
  message: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalizeSize(14),
    color: COLORS.gray2,
    marginBottom: normalizeSize(20),
  },
  buttonStyle: {
    marginTop: normalizeSize(30),
  },
  fieldStyle: {
    backgroundColor: COLORS.gray4,
    textAlign: 'left',
    paddingLeft: normalizeSize(20),
  },
  textFieldStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalizeSize(20),
  },
});

export default ConfirmationScreen;
