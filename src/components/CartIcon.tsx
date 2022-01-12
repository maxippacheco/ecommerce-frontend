import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';

interface Props{
  onPress: () => void;
}

export const CartIcon = ({onPress}: Props) => {
 
  const { cart } = useContext(CartContext);   

  return (
    <View style={{display: 'flex', height: '100%', justifyContent: 'center'}}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        {
          (cart.length >= 1) &&
          (
            <View style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              position: 'absolute',
              zIndex: 999,
              right: 5,
              bottom: -5,
              borderRadius: 999,
            }}>
              {
                (cart.length <= 9)
                ? ( <Text style={{ color: 'white', textAlign: 'center', }}>{ cart.length }</Text> )
                : ( <Text style={{ color: 'white', textAlign: 'center', }}>+9</Text> )
                
              }
            </View>

          )
        }
        <Icon name="cart-outline" size={30} color="black" style={{marginRight: 10}} />
      </TouchableOpacity>
    </View>
  );
};
