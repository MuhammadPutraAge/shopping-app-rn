import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import { COLORS, ONBOARDING, SIZES } from '../../constants';

interface PaginatorProps {
  translateX: SharedValue<number>;
}

const Paginator: React.FC<PaginatorProps> = ({translateX}) => {
  return (
    <View style={styles.dotContainer}>
      {ONBOARDING.map(({id}, index) => {
        const rDotStyle = useAnimatedStyle(() => {
          const inputRange = [
            (index - 1) * SIZES.screenWidth,
            index * SIZES.screenWidth,
            (index + 1) * SIZES.screenWidth,
          ];

          const width = interpolate(
            translateX.value,
            inputRange,
            [8, 24, 8],
            Extrapolate.CLAMP,
          );

          const backgroundColor = interpolateColor(
            translateX.value,
            inputRange,
            [COLORS.grey, COLORS.primary, COLORS.grey],
          );

          return {width, backgroundColor};
        });

        return <Animated.View key={id} style={[styles.dot, rDotStyle]} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
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
