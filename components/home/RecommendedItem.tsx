import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {RecommendDataType} from '../../types';
import {COLORS, FONTS, SIZES} from '../../constants';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg';

type RecommendedItemProps = {
  item: RecommendDataType;
};

const ITEM_WIDTH = SIZES.screenWidth - SIZES.margin * 2;

const RecommendedItem: React.FC<RecommendedItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={item.source} style={styles.img} />
        <View style={styles.productInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Rating
            type="custom"
            ratingColor={COLORS.orange}
            style={{alignSelf: 'flex-start'}}
            startingValue={item.rating}
            ratingCount={5}
            imageSize={14}
            readonly
          />
        </View>
      </View>
      <ChevronRightIcon />
    </View>
  );
};

export default RecommendedItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: ITEM_WIDTH,
    marginHorizontal: SIZES.margin,
    backgroundColor: COLORS.white,
    padding: 10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 4,
    borderRadius: 16,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS[600],
    fontSize: 16,
  },
  category: {
    color: COLORS.grey,
    fontFamily: FONTS[400],
    fontSize: 13,
    marginBottom: 8
  },
});
