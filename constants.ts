import {Dimensions} from 'react-native';
import {OnboardingDataType, PopularDataType, RecommendDataType} from './types';

// THEME
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const COLORS = {
  white: '#FFFFFF',
  black: '#333333',
  grey: '#8A8A8A',
  primary: '#FF5874',
  orange: '#f39c12',
};

export const FONTS = {
  300: 'OpenSans-Light',
  400: 'OpenSans-Regular',
  500: 'OpenSans-Medium',
  600: 'OpenSans-SemiBold',
  700: 'OpenSans-Bold',
};

export const SIZES = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  margin: 32,
};

// DUMMY DATA
export const ONBOARDING: OnboardingDataType[] = [
  {id: '1', source: require('./assets/images/onboarding1.jpg')},
  {id: '2', source: require('./assets/images/onboarding2.jpg')},
  {id: '3', source: require('./assets/images/onboarding3.jpg')},
];

export const POPULAR: PopularDataType[] = [
  {
    id: '1',
    source: require('./assets/images/onboarding2.jpg'),
    title: 'Casual Dress',
    price: '$150.00',
  },
  {
    id: '2',
    source: require('./assets/images/onboarding3.jpg'),
    title: 'Casual Hoodie',
    price: '$122.00',
  },
  {
    id: '3',
    source: require('./assets/images/onboarding1.jpg'),
    title: 'Casual T-Shirt',
    price: '$89.99',
  },
];

export const RECOMMENDED: RecommendDataType[] = [
  {
    id: '1',
    source: require('./assets/images/onboarding1.jpg'),
    title: 'Casual T-Shirt',
    category: 'Modern Style',
    rating: 4,
  },
  {
    id: '2',
    source: require('./assets/images/onboarding3.jpg'),
    title: 'Casual Hoodie',
    category: 'Modern Style',
    rating: 4.5,
  },
  {
    id: '3',
    source: require('./assets/images/onboarding2.jpg'),
    title: 'Casual Dress',
    category: 'Modern Style',
    rating: 4.5,
  },
];
