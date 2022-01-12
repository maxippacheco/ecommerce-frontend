import React, { useContext } from 'react';
import {ScrollView, Text, View,} from 'react-native';
import { CartContext } from '../context/CartContext';
import { CartCard } from '../components/CartCard';
import { globalStyles } from '../themes/app-theme';

export const CartScreen = () => {

	const { cart } = useContext( CartContext );

	if (cart.length === 0) {
		return (
			<View style={{flex: 1, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{fontSize: 23, color: globalStyles.primaryColor, marginBottom: 20}}>Nothing for now...</Text>
			</View>
		)
	}

	return (
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
			{
				cart.map( product => (
					<CartCard {...product} key={product.id} />
				))
			}
		</ScrollView>
	);
}
