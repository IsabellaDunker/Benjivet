import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from './src/pages/Home'
import { CalcScreen } from './src/pages/Calc'
import { CalcScreen2 } from './src/pages/Calc2'
import { CalcScreen3 } from './src/pages/Calc3'
import { CalcScreen4 } from './src/pages/Calc4'
import { SelectionScreen } from './src/pages/Selection'

const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calc" component={CalcScreen} />
        <Stack.Screen name="Calc2" component={CalcScreen2} />
        <Stack.Screen name="Calc3" component={CalcScreen3} />
        <Stack.Screen name="Calc4" component={CalcScreen4} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
