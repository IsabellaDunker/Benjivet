import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header'

  const [valorGraoMoido,setValorGraoMoido]=useState('')
  const [valorTeorMilho, setValorTeorMilho]=useState('')
  const [valorTeorUmidade, setValorTeorUmidade]=useState('')
  const [valorAguaTotal, setValorAguaTotal]=useState('')

    const handleChangeGraoMoido = (novoValorGraoMoido) => {
      setValorGraoMoido(parseFloat(novoValorGraoMoido));
    };
    const handleChangeTeorMilho = (novoValorTeorMilho) => {
      setValorTeorMilho(parseFloat(novoValorTeorMilho));
    };
    const handleChangeTeorUmidade = (novoValorTeorUmidade) => {
      setValorTeorUmidade(parseFloat(novoValorTeorUmidade));
    };
    const handleChangeAguaTotal = (novoValorAguaTotal) => {
      setValorAguaTotal(parseFloat(novoValorAguaTotal));
    };

    const handleSubmitResultado = () => {

      setValorGraoMoido('')
      setValorTeorMilho('')
      setValorTeorUmidade('')
      setValorAguaTotal('')
      Alert.alert('Resultado', (100-((valorGraoMoido*valorTeorMilho/100)*100/(((valorGraoMoido-(valorGraoMoido*valorTeorMilho/100))+(valorGraoMoido*valorTeorMilho/100)+valorAguaTotal)))).toString() )

    }

export function CalcScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Grão moido (KG):</Text>
        <TextInput 
          value={valorGraoMoido.toString()}
          style={{flex:1}} 
          onChangeText={handleChangeGraoMoido}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Teor de MS do milho (%):</Text>
        <TextInput 
          value={valorTeorMilho.toString()}
          style={{flex:1}} 
          onChangeText={handleChangeTeorMilho}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Teor de umidade (%):</Text>
        <TextInput 
          value={valorTeorUmidade.toString()}
          style={{flex:1}} 
          onChangeText={handleChangeTeorUmidade}
          keyboardType="numeric"
        />
        <Text style={styles.text}>Água Total(l):</Text>
        <TextInput 
          value={valorAguaTotal.toString()}
          style={{flex:1}} 
          onChangeText={handleChangeAguaTotal}
          keyboardType="numeric"
          />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleSubmitResultado} style={styles.button}>
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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