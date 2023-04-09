import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TextInput,number, onChangeNumber, Pressable} from 'react-native';

export function CalcScreen() {
  return(
    <SafeAreaView style={styles.containerMain}>
      <View style={styles.container}>
          <Text style={styles.texto}>Insira os Valores desejados:</Text>
          <Text style={styles.texto}>Grão moido (KG):</Text>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
          <Text style={styles.texto}>Teor de MS do milho (%):</Text>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
          <Text style={styles.texto}>Teor de umidade (%):</Text>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
      </View>
      <View style={styles.containerButton}>
        <Pressable style={styles.button}>
              <Text style={styles.textCalcular}>Calcular</Text>
            </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerMain:{
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    
  },
  input:{
    backgroundColor: '#565456',
    borderRadius: 8,
  },
  texto:{
    paddingTop: 25,
  },
  containerButton:{
    marginTop:50,
  },
  button:{
    backgroundColor: `#f8f8ff`,
    borderRadius: 10,
  },
  textCalcular:{
    padding: 12,
    alignItems: 'center',
  }
})