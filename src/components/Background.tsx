import React from 'react';
import {StyleSheet, View} from 'react-native';
import { globalStyles } from '../themes/app-theme';

export const Background = () => {
	return <View style={styles.lineBackground} />;
}

const styles = StyleSheet.create({
	lineBackground:{
		position: 'absolute',
		top: 500,
		width: 1200,
		height: 1000,
		backgroundColor: globalStyles.primaryColor,
		borderRadius: 400,
		transform: [{
			rotate: '80deg'
		}]
	}
});