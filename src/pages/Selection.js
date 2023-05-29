import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import Selector from '../components/Selector'

export function SelectionScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Header />

      <Text style={styles.text}>Calculadoras: </Text>
      <Selector />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  text: {
    fontSize: 28, 
    color: '#228866',
    paddingTop: 20,
    paddingBottom: 30,
    alignSelf: 'center'
  },

})