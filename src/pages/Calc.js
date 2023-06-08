import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button ,TouchableOpacity, Alert} from 'react-native';
import Header from '../components/Header'

export function CalcScreen() {

  const [valorGraoMoido,setValorGraoMoido]=useState('')
  const [valorTeorMilho, setValorTeorMilho]=useState('')
  const [valorTeorUmidade, setValorTeorUmidade]=useState('')
  const [valorAguaTotal, setValorAguaTotal]=useState('')

    const handleChangeGraoMoido = (novoValorGraoMoido) => {
      setValorGraoMoido(novoValorGraoMoido);
    };
    const handleChangeTeorMilho = (novoValorTeorMilho) => {
      setValorTeorMilho(novoValorTeorMilho);
    };
    const handleChangeTeorUmidade = (novoValorTeorUmidade) => {
      setValorTeorUmidade(novoValorTeorUmidade);
    };
    const handleChangeAguaTotal = (novoValorAguaTotal) => {
      setValorAguaTotal(novoValorAguaTotal);
    };

    const handleSubmitResultado = () => {
      Alert.alert('Resultado', (100-((valorGraoMoido*valorTeorMilho/100)*100/(((valorGraoMoido-(valorGraoMoido*valorTeorMilho/100))+(valorGraoMoido*valorTeorMilho/100)+valorAguaTotal)))).toFixed(2).toString() )

      setValorGraoMoido('')
      setValorTeorMilho('')
      setValorTeorUmidade('')
      setValorAguaTotal('')
    }



  return(
    <ScrollView style={styles.containerMain}>

    <Header screen='Selection'/>
      <View style={styles.container}>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Grão moido (KG):</Text>
        <TextInput
          value={valorGraoMoido.toString()}
          style={styles.input} 
          onChangeText={handleChangeGraoMoido}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Teor de MS do milho (%):</Text>
        <TextInput 
          value={valorTeorMilho.toString()}
          style={styles.input}  
          onChangeText={handleChangeTeorMilho}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Teor de umidade (%):</Text>
        <TextInput 
          value={valorTeorUmidade.toString()}
          style={styles.input} 
          onChangeText={handleChangeTeorUmidade}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Água Total(l):</Text>
        <TextInput 
          value={valorAguaTotal.toString()}
          style={styles.input} 
          onChangeText={handleChangeAguaTotal}
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