import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const COLORS = {
  white: '#FFFFFF',
  black: '#333333',
  grey: '#969696',
  primary: '#FF5874',
};

export const FONTS = {
  300: 'OpenSans-Light',
  400: 'OpenSans-Regular',
  500: 'OpenSans-Medium',
  600: 'OpenSans-SemiBold',
  700: 'OpenSans-Bold',
};

export const ONBOARDING = [
  {id: '1', source: require('./assets/images/onboarding1.jpg')},
  {id: '2', source: require('./assets/images/onboarding2.jpg')},
  {id: '3', source: require('./assets/images/onboarding3.jpg')},
];

export const SIZES = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
};
