import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// component
import {
  Container,
  AppText,
  AppTextInput,
  Field,
  AppButton,
} from '../../components/';

// constants
import {SIZES, COLORS, normalizeSize} from '../../constants';

const {width, height} = SIZES;

const RegisterScreen = ({navigation, route}) => {
  return (
    <Container style={styles.container}>
      {/* content */}
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Register</AppText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '45%'}}>
            <Field
              title="FIRST NAME :"
              value="David"
              fieldStyle={styles.fieldStyle}
              textFieldStyle={styles.textFieldStyle}
            />
          </View>
          <View style={{width: '45%'}}>
            <Field
              title="LAST NAME :"
              value="Shearer"
              fieldStyle={styles.fieldStyle}
              textFieldStyle={styles.textFieldStyle}
            />
          </View>
        </View>

        {/* country */}
        <Field
          title="COUNTRY :"
          value="MALAYSIA"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
        />

        {/* email */}
        <Field
          title="EMAIL :"
          value="david@sewwa.com"
          fieldStyle={styles.fieldStyle}
          keyboardType="email-address"
          textFieldStyle={styles.textFieldStyle}
        />

        {/* mobile */}
        <Field
          title="MOBILE :"
          value="644-631-9422"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
          keyboardType="number-pad"
        />

        {/* password */}
        <Field
          title="PASSWORD :"
          value="123456789"
          fieldStyle={styles.fieldStyle}
          textFieldStyle={styles.textFieldStyle}
          secureTextEntry={true}
        />
      </View>

      {/* register button */}
      <AppButton
        title="Register"
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
  contentContainer: {},
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalizeSize(20),
    color: COLORS.primary,
    marginBottom: normalizeSize(5),
  },
  buttonStyle: {},
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalizeSize(20),
    color: COLORS.gray3,
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

export default RegisterScreen;
