import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { globalStyles } from '../themes/app-theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/AuthNavigation';

interface Props extends StackScreenProps<RootStackParams, 'Register'>{};

export const RegisterScreen = ({ navigation }: Props ) => {
	return (
		<View style={{ flex: 1, display: 'flex', backgroundColor: globalStyles.primaryColor ,justifyContent: 'center', alignItems: 'center' }}>

			<View style={{ position: 'absolute', top: -200, right: -100 }}>
				<Icon name='logo-react' size={400} color='#444' />
			</View>

			<View style={styles.container}>

				<Text style={{ fontSize: 22, marginVertical: 10, color: 'black' }}>Create your account</Text>

				<TextInput 
					style={ styles.customInput } 
					placeholder='Email' 
				/>
				
				<TextInput 
					style={ styles.customInput } 
					placeholder='Username' 
				/>
				
				<TextInput 
					style={ styles.customInput } 
					placeholder='Password' 
				
				/>

				<TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
					<Text style={{ color: 'white', fontSize: 16 }}>Register</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => navigation.navigate('Login') }>
					<Text style={{ color: globalStyles.primaryColor }}>Do you have an account?</Text>
				</TouchableOpacity>
			</View>	
		</View>
	);
}

const styles = StyleSheet.create({
	container: { 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center', 
		width: 300, 
		height: 450, 
		backgroundColor: 'white', 
		borderWidth: 2, 
		borderColor: '#ccc',
		borderRadius: 10, 

	},
	customInput: {
		width: '70%',
		borderBottomWidth: 1, 
		marginBottom: 20,
		borderColor: '#ccc'
	},
	submitButton: { 
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: globalStyles.primaryColor, 
		borderRadius: 8,
		marginBottom: 10
	}
});