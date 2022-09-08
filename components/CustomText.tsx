import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

interface CustomTextProps {
  children: string;
}

const CustomText: React.FC<CustomTextProps> = ({children}) => {
  return (
    <View style={styles.innerTitleContainer}>
      <Text style={styles.innerTitle}>{children}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  innerTitleContainer: {
    backgroundColor: COLORS.primary,
    transform: [
      {rotate: '-3deg'},
      {translateY: Platform.OS === 'android' ? 8 : 2},
    ],
  },
  innerTitle: {
    fontSize: 24,
    fontFamily: FONTS[700],
    color: COLORS.white,
    transform: [{rotate: '3deg'}],
  },
});
