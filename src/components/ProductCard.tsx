import React from 'react';
import { useContext } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Product } from '../interfaces/app-interfaces';
import { CartContext } from '../context/CartContext';


export const ProductCard = (props: Product) => {

  const { addToCart, cart } = useContext( CartContext );

  const onPress = () => {
    if (!cart.includes(props)) {
      addToCart(props);   
    }
  }

	return (
		<View style={styles.productContainer}>
          <View style={styles.productLayout}>
            <Image source={{uri: props.img}} style={styles.productImage} />
            <Text style={styles.productName}>{props.name}</Text>
            <View style={styles.productNameContainer}>
              <Text style={styles.productPrice}>{'$' + props.price}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={{...styles.productPrice, color: '#59addd'}}>
                  ADD TO CART
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
	);
}

const styles = StyleSheet.create({
 productContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productLayout: {
    width: 200,
    height: 350,
    marginVertical: 20,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
  },
  productName: {
    color: 'black',
    fontSize: 17,
    marginVertical: 17,
    marginLeft: 15,
  },
  productNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  productPrice: {
    color: 'green',
    fontSize: 15,
  },
});