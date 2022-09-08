import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import ArrowRightIcon from '../assets/icons/arrow-right.svg';
import { COLORS, FONTS, ONBOARDING, SIZES } from '../constants';

const Onboarding = () => {
  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / SIZES.screenWidth);
  });

  const scrollRef = useAnimatedRef<FlatList>();

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const handlePress = () => {
    if (activeIndex.value === ONBOARDING.length - 1) return;
    scrollRef.current?.scrollToIndex({index: activeIndex.value + 1});
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={scrollRef as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        bounces={false}
        onScroll={scrollHandler}
        data={ONBOARDING}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={styles.imageItem}>
            <Image
              style={styles.image}
              source={item.source}
              resizeMode="cover"
            />
          </View>
        )}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Find The Best{' '}
          <View style={styles.innerTitleContainer}>
            <Text style={styles.innerTitle}>Fashion</Text>
          </View>{' '}
          Style For You
        </Text>

        <Text style={styles.description}>
          Platform that provides many kinds of the best and most trusted fashion
          styles
        </Text>

        <Pressable style={styles.fab} onPress={handlePress}>
          <ArrowRightIcon />
        </Pressable>

        <View style={styles.dotContainer}>
          {ONBOARDING.map(({id}, index) => {
            const rDotStyle = useAnimatedStyle(() => {
              const width = interpolate(
                translateX.value,
                [
                  (index - 1) * SIZES.screenWidth,
                  index * SIZES.screenWidth,
                  (index + 1) * SIZES.screenWidth,
                ],
                [8, 24, 8],
                Extrapolate.CLAMP,
              );

              const backgroundColor = interpolateColor(
                translateX.value,
                [
                  (index - 1) * SIZES.screenWidth,
                  index * SIZES.screenWidth,
                  (index + 1) * SIZES.screenWidth,
                ],
                [COLORS.grey, COLORS.primary, COLORS.grey],
              );

              return {width, backgroundColor};
            });

            return <Animated.View key={id} style={[styles.dot, rDotStyle]} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageItem: {
    height: SIZES.screenHeight * 0.63,
    width: SIZES.screenWidth,
  },
  image: {
    height: SIZES.screenHeight * 0.63,
    width: SIZES.screenWidth,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: SIZES.screenWidth,
    minHeight: SIZES.screenHeight * 0.37 + 24,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  title: {
    maxWidth: SIZES.screenWidth * 0.8,
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS[700],
  },
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
  description: {
    maxWidth: SIZES.screenWidth * 0.75,
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: COLORS.grey,
    fontFamily: FONTS[600],
    fontSize: 16,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowOffset: {width: 0, height: 2},
    shadowColor: COLORS.primary,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: COLORS.grey,
  },
});
