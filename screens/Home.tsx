import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import PopularList from '../components/home/PopularList';
import RecommendedList from '../components/home/RecommendedList';
import SearchBar from '../components/home/SearchBar';
import {COLORS, POPULAR, RECOMMENDED, SIZES} from '../constants';

const profile = require('../assets/images/profile.jpg');

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header name="Mariona Putri" profilePicture={profile} />
        <SearchBar />
        <PopularList data={POPULAR} />
        <RecommendedList data={RECOMMENDED} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.margin,
  },
});
