import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerNavigationHelpers, DrawerProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../themes/app-theme';


interface Props{
	iconName: string;
	iconSize?: number;
	iconColor?: string;
	text: string;
	textColor?: string;
	onPress: () => void;
}

export const LateralMenuItem = ({ iconName, text, textColor = 'black', iconSize = 35, iconColor = 'black', onPress}: Props) => {


	return (
		<TouchableOpacity style={styles.iconContainer} onPress={onPress}>
				<Icon
					name={iconName}
					size={iconSize}
					color={ iconColor }
				/>
				<Text style={{
					...styles.title,
					marginLeft: 10,
					color: textColor
				}}>{text}</Text>
		</TouchableOpacity>
		
	);
}


const styles = StyleSheet.create({
	iconContainer:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'center',
		marginVertical: 10,
		marginLeft: 20
	},
	title:{
		fontSize: 20,
		textAlign: 'center',
		color: globalStyles.titleColor 
	}
});