import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ screen }){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <TouchableOpacity 
        activeOpacity={0.9} 
        onPress={() => navigation.navigate(screen)}
        style={styles.btnBack}>
          <Icon name='angle-left' size={40} color='#FFF'/>
        </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.name}>BENJIVET</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
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
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  btnBack: {
    width: 44,
    height: 44,
  }
})