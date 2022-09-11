import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FilterIcon from '../../assets/icons/filter.svg';
import SearchIcon from '../../assets/icons/search.svg';
import { COLORS, FONTS, SIZES } from '../../constants';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder="Search fashion..."
          placeholderTextColor={COLORS.grey}
          returnKeyType="search"
          selectionColor={COLORS.primary}
        />
      </View>

      <View style={styles.filterBtn}>
        <FilterIcon />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.margin,
    marginBottom: 24
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    padding: 0,
    height: 40,
    fontFamily: FONTS[600],
    color: COLORS.black,
  },
  filterBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
});
