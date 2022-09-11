import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SIZES} from '../../constants';
import {OnboardingDataType} from '../../types';

interface ImageItemProps {
  item: OnboardingDataType;
}

const ImageItem: React.FC<ImageItemProps> = ({item}) => {
  return (
    <View style={styles.imageItem}>
      <Image
        style={styles.image}
        source={item.source}
        resizeMode="cover"
        fadeDuration={0}
      />
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  imageItem: {
    height: SIZES.screenHeight * 0.63,
    width: SIZES.screenWidth,
  },
  image: {
    height: SIZES.screenHeight * 0.63,
    width: SIZES.screenWidth,
  },
});
