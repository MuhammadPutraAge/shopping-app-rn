import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../assets/icons/arrow-right.svg';
import {COLORS} from '../constants';

interface FabProps {
  onPress: () => void;
}

const FloatingActionButton: React.FC<FabProps> = ({onPress}) => {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <ArrowRightIcon />
    </Pressable>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowOffset: {width: 0, height: 2},
    shadowColor: COLORS.primary,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
});
