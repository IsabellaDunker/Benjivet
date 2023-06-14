import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput ,TouchableOpacity, Alert} from 'react-native';
import Header from '../components/Header'

export function CalcScreen3() {

  const [valorSilagem, setValorSilagem]=useState('')
  const [valorFibra, setValorFibra]=useState('')
  const [valorMS, setValorMS]=useState('')

    const handleChangeSilagem = (novoValorSilagem) => {
      setValorSilagem(novoValorSilagem);
    };
    const handleChangeFibra = (novoValorFibra) => {
      setValorFibra(novoValorFibra);
    };
    const handleChangeMS = (novoValorMS) => {
      setValorMS(novoValorMS);
    };

    const handleSubmitResultado = () => {
      const dietaTotal = ((valorSilagem * 0.17)/valorFibra).toFixed(2)
      const dietaMS = ((valorMS * dietaTotal)/100).toFixed(2) 
      const dietaSilagem = (dietaTotal - dietaMS).toFixed(2)

      Alert.alert(
        `A ingestão ideal da vaca é: ${dietaTotal}Kg, 
        sendo ${dietaMS}Kg de MS e ${dietaSilagem}Kg de MS concentrado`)

      setValorSilagem('')
      setValorFibra('')
      setValorMS('')
    }

  return(
    <ScrollView style={styles.containerMain}>

    <Header screen='Selection'/>
      <View style={styles.container}>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Gordura da matéria seca (%):</Text>
        <TextInput
          value={valorSilagem.toString()}
          style={styles.input} 
          onChangeText={handleChangeSilagem}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Valor de Fibra por dia (L):</Text>
        <TextInput 
          value={valorFibra.toString()}
          style={styles.input}  
          onChangeText={handleChangeFibra}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Valor da gordura do Fibra (%):</Text>
        <TextInput 
          value={valorMS.toString()}
          style={styles.input} 
          onChangeText={handleChangeMS}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Peso do animal (Kg):</Text>
        <TextInput 
          value={valorPeso.toString()}
          style={styles.input} 
          onChangeText={handleChangePeso}
          keyboardType="numeric"
          />

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleSubmitResultado} style={styles.button}>
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  container:{
    backgroundColor: '#fff',
    paddingTop: 30,
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