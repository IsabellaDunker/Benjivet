import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header'

export function CalcScreen({ navigation }) {
  return(
    <View style={styles.containerMain}>
    <Header/>
      <View style={styles.container}>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Grão moido (KG):</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={() => {}}
          />
        <Text style={styles.text}>Teor de MS do milho (%):</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={() => {}}
          />
        <Text style={styles.text}>Teor de umidade (%):</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={() => {}}
          />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  container:{
    backgroundColor: '#fff',
    paddingStart: 25,
    paddingEnd: 25,
    justifyContent: 'center',
  },
  input:{
    borderBottomColor:'#ccc', 
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingBottom:15, 
    marginBottom:25
  },
  text: {
    fontSize: 16,
  },
  textMain: {
    fontSize: 28, 
    color: '#228866',
    paddingTop: 20,
    paddingBottom: 40,
    alignSelf: 'center'
  },
  containerButton:{
    marginTop:50,
  },
  button:{
    backgroundColor: '#1680E1',
    padding: 15,
    borderRadius: 10,
    marginBottom:30,
  },
  textCalcular:{
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    color: '#fff'
  }
})