import React from 'react';
import { useContext } from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { globalStyles } from '../themes/app-theme';
import { takePhoto } from '../helpers/take-photo';

export const ProfileScreen = () => {
	
	const { user, updateUser, uploadImage } = useContext(AuthContext);

	const { form, onChange } = useForm({
		newFirstName:	user?.firstName,	
		newLastName: user?.lastName,
		newUsername: user?.username,
		newEmail: user?.email,
	});

	const { newFirstName, newLastName, newUsername, newEmail } = form;

	const onUpdateUser = () => {
	
		updateUser(
			{
				email: newEmail    || user?.email as string,
				firstName: newFirstName|| user?.firstName as string,
				lastName: newLastName || user?.lastName as string,
				username: newUsername || user?.username as string,
				password: user?.password as string,
				role: user?.role as string,
				id:  user?.id as string,
			},
			user?.id as string
		);

		console.log({ newFirstName, newLastName, newUsername, newEmail });
		
	}


	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<TouchableOpacity 
					style={styles.pencilIcon} 
					activeOpacity={ 0.8 }
					onPress={() => takePhoto(user?.id || '', uploadImage)}
				>
					<Icon name='pencil' size={20} color='white' />
				</TouchableOpacity>
				<Image source={{uri: user?.img}} style={styles.image} />		
			</View>

			<View style={{ display: 'flex', alignItems: 'center', marginTop: 10}}>
				<TextInput 
				 	style={ styles.customInput }
					 value={ newFirstName }
					 onChangeText={(value) => onChange(value, 'newFirstName')}
				/>

				<TextInput 
					style={ styles.customInput }
					value={ newLastName }  
					onChangeText={(value) => onChange(value, 'newLastName')}
				/>
				
				<TextInput 
					style={ styles.customInput }
					value={ newUsername }
					onChangeText={(value) => onChange(value, 'newUsername')}
				/>
				
				<TextInput 
					style={ styles.customInput }
					value={ newEmail }
					onChangeText={(value) => onChange(value, 'newEmail')}
				/>
				
				<TouchableOpacity style={ styles.submitButton } onPress={ onUpdateUser }>
					<Text style={{ color: 'white', textAlign: 'center'}}>Submit</Text>	
				</TouchableOpacity>
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
	pencilIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 140,
		top: 20, 
		width: 35,
		height: 35,
		padding: 3,
		zIndex: 1, 
		backgroundColor: 'purple', 
		borderRadius: 100,
	},
	submitButton: {
		width: '35%',
		marginTop: 10,
		padding: 8,
		backgroundColor: globalStyles.primaryColor,
		borderRadius: 8
	},
});