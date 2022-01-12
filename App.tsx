import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { ProductProvider } from './src/context/ProductContext';
import { CartProvider } from './src/context/CartContext';
import { ThemeProvider } from './src/context/ThemeContext';


const AppState = ({ children }: any) => {
  return(
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <ThemeProvider>
            { children }
          </ThemeProvider>
        </CartProvider>
        </ProductProvider>
    </AuthProvider>
  )
}


const App = () => {
  return (
      <NavigationContainer>
        <AppState>
            <AuthNavigation />
        </AppState>
      </NavigationContainer>
  );
}

export default App;