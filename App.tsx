import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MenuLateral } from './src/navigation/MenuLateral';

const App = () => {
  return (
      <NavigationContainer>
        <MenuLateral />
      </NavigationContainer>
  );
}

export default App;