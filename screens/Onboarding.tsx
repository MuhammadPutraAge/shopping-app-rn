import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import CustomText from '../components/onboarding/CustomText';
import FloatingActionButton from '../components/onboarding/FloatingActionButton';
import ImageItem from '../components/onboarding/ImageItem';
import Paginator from '../components/onboarding/Paginator';
import {COLORS, FONTS, ONBOARDING, SIZES} from '../constants';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const Onboarding: React.FC<Props> = ({navigation}) => {
  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / SIZES.screenWidth);
  });

  const scrollRef = useAnimatedRef<FlatList>();

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const handlePress = () => {
    if (activeIndex.value === ONBOARDING.length - 1) {
      navigation.navigate('Home');
    } else {
      scrollRef.current?.scrollToIndex({index: activeIndex.value + 1});
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Animated.FlatList
        ref={scrollRef as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        decelerationRate="fast"
        bounces={false}
        onScroll={scrollHandler}
        data={ONBOARDING}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ImageItem item={item} />}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Find The Best <CustomText>Fashion</CustomText> Style For You
        </Text>

        <Text style={styles.description}>
          Platform that provides many kinds of the best and most trusted fashion
          styles
        </Text>

        <FloatingActionButton onPress={handlePress} />

        <Paginator translateX={translateX} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  description: {
    maxWidth: SIZES.screenWidth * 0.75,
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: COLORS.grey,
    fontFamily: FONTS[600],
    fontSize: 14,
  },
});
