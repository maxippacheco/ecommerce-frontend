import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../views/LoginScreen';
import { MenuLateral } from './MenuLateral';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Ecommerce" component={MenuLateral} />
    </Stack.Navigator>	
  );
}