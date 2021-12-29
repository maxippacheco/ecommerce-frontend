import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../components/Background';
import { globalStyles } from '../themes/app-theme';
import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';


export const LoginScreen = () => {

	const context = useContext(AuthContext);	

	const { signIn, user, token } = context;

	useEffect(() => {
		
		console.log(context);
		
	}, [context])


	const {form, onChange, setFormValue} = useForm({
		email: '',
		password: ''
	});

	const { password, email } = form;

	const onLogin = async() => {
		signIn({email, password});

	}

	return (
		<View style={loginStyles.container}>
			<Background />

			<KeyboardAvoidingView style={loginStyles.formContainer} behavior='height'>
					<Text style={loginStyles.title}>Login</Text>


					<View style={loginStyles.inputContainer}>
						<TextInput 
							style={loginStyles.customInput} 
							placeholder='Username'
							autoCapitalize='none'
							onChangeText={(value) => onChange(value, 'email')}
							value={email}
							onSubmitEditing={onLogin}
						/>
					</View>

					<View style={loginStyles.inputContainer}>
					 	<TextInput 
					 		style={loginStyles.customInput} 
							placeholder='Password' 
							secureTextEntry
							onChangeText={(value) => onChange(value, 'password')}
							value={password}
							onSubmitEditing={onLogin}
						/>
					</View>

					<View style={loginStyles.inputContainer}>
						<TouchableOpacity style={loginStyles.submitButton}>
							<Text style={loginStyles.submitText}>Submit</Text>
						</TouchableOpacity>
					</View>

					<View style={loginStyles.inputContainer}>
						<Text style={loginStyles.registerLink}>Don't you have an account?</Text>
					</View>

			</KeyboardAvoidingView>

		</View>
	);
}

const loginStyles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	formContainer:{
		width: '80%',
		height: '50%',
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 10
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: 10,
		marginTop: 20,
		color: globalStyles.titleColor
	},
	inputContainer:{
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		marginVertical: 10
	},
	customInput: {
		width: '70%',
		borderBottomWidth: 1.5,
		borderColor: '#ccc'
	},
	submitButton:{
		backgroundColor: globalStyles.primaryColor,
		paddingVertical: 9,
		paddingHorizontal: 20,
		marginTop: 10,
		borderRadius: 5
	},
	submitText:{
		color: 'white',
		fontSize: 16
	},
	registerLink: {
		color: globalStyles.primaryColor
	},

});