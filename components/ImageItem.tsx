import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {SIZES} from '../constants';

interface ImageItemProps {
  item: {id: string; source: ImageSourcePropType};
}

const ImageItem: React.FC<ImageItemProps> = ({item}) => {
  return (
    <View style={styles.imageItem}>
      <Image style={styles.image} source={item.source} resizeMode="cover" />
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
