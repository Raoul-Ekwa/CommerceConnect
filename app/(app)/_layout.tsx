import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

const AppLayout = () => {
  const isLogged = false;

  if(!isLogged) {
    return <Redirect href="/Login" />;  
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appelé depuis (app)</Text>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});