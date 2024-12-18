import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Root = () => {
  return (
    <View style={styles.container}>
      <Text>Text page</Text>
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})
