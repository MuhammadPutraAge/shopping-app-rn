import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subText}>View All</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.margin,
    marginBottom: 16,
  },
  title: {
    fontFamily: FONTS[600],
    fontSize: 18,
    color: COLORS.black,
  },
  subText: {
    fontFamily: FONTS[600],
    fontSize: 12,
    color: COLORS.grey,
  },
});
