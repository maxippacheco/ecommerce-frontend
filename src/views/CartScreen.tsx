import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CartContext } from '../context/CartContext';

export const CartScreen = () => {

	const { cart } = useContext( CartContext );

	if (!cart) {
		return <Text>Nothing for now</Text>
	}

	return (
		<View>
			{
				cart.map( product => (
					<View>
						<Text>
							{product.name}
						</Text>
					</View>
				))
			}
		</View>
	);
}

const styles = StyleSheet.create({

});