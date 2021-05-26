import React, {Component} from 'react';
import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const COLORS = {
  primary: '#DC1630', // Orange
  secondary: '#01132E', // Dark blue

  white: '#fff',
  black: '#000000',
  blue: '#344F97',
  red: '#FA3724',
  yellow: '#FEC142',
  green: '#17AA6B',
  gray: '#B5B5B5',
  gray1: '#F6F7FB',
  gray2: '#363636',
  gray3: '#F2F2F2',
  gray4:"#E1E6E8",
  lightGray: '#dedede',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  transparentRed: 'rgba(255,22,48,0.89)',
};

export const SIZES = {
  // app dimenstions
  width,
  height,
};

const scale = width / 375; // iphone 6 width
export const normalizeSize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
    console.log(`normalize size ${newSize}`);
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const SHOP_MARKER =
  'https://kade-bucket.s3.ap-south-1.amazonaws.com/Default-Images/default-shop.png';

const appTheme = {SIZES, COLORS, SHOP_MARKER, normalizeSize};

export default appTheme;
