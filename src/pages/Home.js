import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Pressable, Text } from 'react-native';

import logo from '../../assets/Vets.png';

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainer}>
        <View style={styles.circle}/>
        <View
        style={styles.logo}>
          <Image
            source={logo}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Calc')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        BENJIVET
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'lightblue',
    height: 300,
    width: 300,
    borderRadius: 300/2,
    position: 'absolute',
    top: 187
  },
  logo: {
    width: '80%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    position: 'absolute',
    bottom: 100
  },
  buttonText: {
    fontSize: 30, 
    color: '#1EA4D9',
  },
  footer: {
    fontSize: 15,
    color: '#1EA4D9',
  }
});


