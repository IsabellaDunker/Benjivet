import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Selector from '../components/Selector'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export function SelectionScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.name}>BENJIVET</Text>
      </View>
    </View>

      <Text style={styles.text}>Calculadoras: </Text>
      <Selector screen='Calc' />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 28, 
    color: '#228866',
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'center'
  },
  header:{
    backgroundColor:'#228866',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd:16,
    paddingBottom: 30,
  },
  content: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
})