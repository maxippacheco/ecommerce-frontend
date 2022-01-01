import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MenuLateral } from './src/navigation/MenuLateral';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { ProductProvider } from './src/context/ProductContext';


const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}


const App = () => {
  return (
      <NavigationContainer>
        <AppState>
            <ProductProvider>
              <AuthNavigation />
            </ProductProvider>
        </AppState>
      </NavigationContainer>
  );
}

export default App;