import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './components/auth/Auth';
import Welcome from './components/areaUsuario/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
