import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { COLORS } from './constants';
import Onboarding from './screens/Onboarding';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
        <Onboarding />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
