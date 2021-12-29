import React from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Ionicons';

export const HomeScreen = ({ navigation }: DrawerContentComponentProps) => {
	
	
	return (
		<View style={styles.container}>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		margin: 20
	}
});