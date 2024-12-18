import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
