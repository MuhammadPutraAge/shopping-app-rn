import React from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import FavoriteIcon from '../../assets/icons/heart.svg';
import {COLORS, FONTS, POPULAR, SIZES} from '../../constants';
import {PopularDataType} from '../../types';

type PopularItemProps = {
  item: PopularDataType;
  index: number;
};

type MarginSpacingType = () => ViewStyle;

const ITEM_WIDTH = SIZES.screenWidth * 0.7;

const PopularItem: React.FC<PopularItemProps> = ({item, index}) => {
  const marginSpacing: MarginSpacingType = () => {
    const firstItem = index === 0;
    const lastItem = index === POPULAR.length - 1;

    if (firstItem) {
      return {marginLeft: SIZES.margin};
    } else if (lastItem) {
      return {marginRight: SIZES.margin};
    }

    return {};
  };

  return (
    <View style={[styles.container, marginSpacing()]}>
      <View style={styles.imgContainer}>
        <Image source={item.source} style={styles.img} />
      </View>
      <View style={styles.content}>
        <View style={styles.productInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FavoriteIcon width={20} height={20} />
        </View>
      </View>
    </View>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 24,
    width: ITEM_WIDTH,
    backgroundColor: COLORS.white,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 2,
    elevation: 4,
    borderRadius: 16,
    padding: 14,
    paddingBottom: 0,
  },
  imgContainer: {
    width: '100%',
    height: '80%',
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  content: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 8,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS[600],
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS[600],
    fontSize: 18,
  },
});
