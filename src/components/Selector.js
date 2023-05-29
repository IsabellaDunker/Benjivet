import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import racao from '../../assets/racao.png';

export default function Selector({navigation}){
  return(
    <View style = {styles.container}>
      <View style = {styles.content}>
        <View style = {styles.item}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Calc')}>
            <Image
              source={racao}
              style={styles.image}
            />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Ração</Text>
        </View>
      
        <View style = {styles.item}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Calc')}>
              <Image
                source={racao}
                style={styles.image}
              />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Ração</Text>
        </View>
      </View>

      <View style = {styles.content}>
        <View style = {styles.item}>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('Calc')}>
            <Image
              source={racao}
              style={styles.image}
            />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Ração</Text>
        </View>
      
        <View style = {styles.item}>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => navigation.navigate('Calc')}>
              <Image
                source={racao}
                style={styles.image}
              />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Ração</Text>
        </View>
      </View>
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingStart:25,
    paddingEnd: 25,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    zIndex: 99,
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 22,
    paddingTop: 22,
  },
  button1: {
    width: 150,
    height: 180,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#E6E4F8',
    borderWidth: 0.5,
  },
  button2: {
    width: 150,
    height: 180,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#E4F8E6',
    borderWidth: 0.5,
  },
  button3: {
    width: 150,
    height: 180,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#F8E4E7',
    borderWidth: 0.5,
  },
  button4: {
    width: 150,
    height: 180,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#F7F8E4',
    borderWidth: 0.5,
  },
  image: {
    width: 130,
    height: 140,
    resizeMode: 'stretch',
  },
  buttonText: {
    fontSize: 20, 
    color: '#000000',
    paddingTop: 20,
    paddingHorizontal: 45,
  },

})