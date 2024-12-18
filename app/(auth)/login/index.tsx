import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextInputIcon from '../../../Components/TextInputIcon';
import { Colors } from '../../../Constant/colors';

const index = () => {
  return (
    <View style={styles.root}>
      <Text>Route login trouvée</Text>
      <TextInputIcon />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
    
  },
 
});