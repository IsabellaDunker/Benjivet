import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import { HomeScreen } from './src/pages/Home'
import { CalcScreen } from './src/pages/Calc'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
