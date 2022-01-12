import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../themes/app-theme';
import { ProductsLayout } from '../components/ProductsLayout';

export const HomeScreen = () => {
		
	return (
		<ScrollView style={{backgroundColor: 'white'}}>
			<Text style={styles.title}>Welcome</Text>
			<ProductsLayout />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title:{
		marginLeft: 20,
		marginVertical: 20,
		fontSize: 25,
		fontWeight: '700',
		color: globalStyles.titleColor
	}
});