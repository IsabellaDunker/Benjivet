import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import { HomeScreen } from './src/pages/Home'
import { CalcScreen } from './src/pages/Calc'
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
      <Stack.Screen name="Selection" component={SelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
