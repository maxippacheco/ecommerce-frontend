import React from 'react';
import { useContext } from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../themes/app-theme';

export const ProfileScreen = () => {
	
	const { user } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<View style={styles.pencilIcon}>
					<Icon name='pencil' size={30}/>
				</View>
				<Image source={{uri: user?.img}} style={styles.image} />		
			</View>

			<View style={{ display: 'flex', alignItems: 'center', marginTop: 10}}>
				<TextInput value={ user?.firstName } style={ styles.customInput }/>
				<TextInput value={ user?.lastName }  style={ styles.customInput }/>
				<TextInput value={ user?.username }  style={ styles.customInput }/>
				<TextInput  value={ user?.email }    style={ styles.customInput }/>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	imageContainer:{
		display: 'flex', 
		alignItems: 'center', 
		marginVertical: 20,
		backgroundColor: globalStyles.primaryColor,
		paddingVertical: 25
	},
	image: { 
		width: 150,
		height: 150,
		borderRadius: 999,
	},
	customInput:{
		width: '70%',
		padding: 0,
		paddingBottom: 5,
		borderBottomWidth: 2,
		borderColor: globalStyles.primaryColor,
		marginBottom: 10,
		fontSize: 16
	},
	pencilIcon: {position: 'absolute', right: 150, top: 20, zIndex: 1, backgroundColor: 'red', borderRadius: 100}
});