import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header'

export function CalcScreen2({ navigation }) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Grão moido (KG):</Text>
        <TextInput 
          style={{flex:1}} 
          onChangeText={onChangeNumber}
          value={number}
          />
        <Text style={styles.text}>Teor de MS do milho (%):</Text>
        <TextInput 
          style={{flex:1}} 
          onChangeText={onChangeNumber}
          value={number}
          />
        <Text style={styles.text}>Teor de umidade (%):</Text>
        <TextInput 
          style={{flex:1}} 
          onChangeText={onChangeNumber}
          value={number}
          />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#565456',
    borderRadius: 8,
  },
  text:{
    paddingTop: 25,
  },
  textMain: {
    fontSize: 28, 
    color: '#228866',
    paddingTop: 20,
    paddingBottom: 30,
    alignSelf: 'center'
  },
  containerButton:{
    marginTop:50,
  },
  button:{
    backgroundColor: '#1680E1',
    padding: 20,
    borderRadius: 10,
    marginBottom:30,
  },
  textCalcular:{
    padding: 12,
    alignItems: 'center',
  }
})