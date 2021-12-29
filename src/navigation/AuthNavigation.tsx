import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../views/LoginScreen';
import { MenuLateral } from './MenuLateral';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export const AuthNavigation = () => {

  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {
        (status === 'authenticated') 
        ? ( <Stack.Screen name="Ecommerce" component={MenuLateral} />)
        : ( <Stack.Screen name="Login" component={LoginScreen} />)
      }
    </Stack.Navigator>	
  );
}