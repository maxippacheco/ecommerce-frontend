import * as React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { LoginScreen } from '../views/LoginScreen';
import { MenuLateral } from './MenuLateral';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { RegisterScreen } from '../views/RegisterScreen';

// stack params
export type RootStackParams = {
  Ecommerce: undefined;
  Login: undefined;
  Register: undefined;
}

// implementing params on the stack
const Stack = createStackNavigator<RootStackParams>();

export const AuthNavigation = () => {

  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      {
        (status === 'authenticated') 
        ? ( <Stack.Screen name="Ecommerce" component={MenuLateral} />)
        : 
        ( 
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        
        )
      }
    </Stack.Navigator>	
  );
}