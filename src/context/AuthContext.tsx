import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { createContext } from "react";
import { authReducer, AuthState } from './authReducer';
import { User, LoginData, LoginResponse, UpdateUserResponse, RegisterData, RegisterResponse } from '../interfaces/app-interfaces';
import ecommerceApi from '../api/ecommerceApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImagePickerResponse } from 'react-native-image-picker';

type AuthContextProps = {
	status: 'checking' | 'authenticated' | 'not-authenticated',
	token: string | null,
	user: User | null,
	errorMessage: string,
	signUp: (registerData: RegisterData) => void,
	signIn: (loginData: LoginData) => void,
	logout: () => void,
	uploadImage: (data: ImagePickerResponse, id: string) => Promise<void>,
	updateUser: ( userData: User , id: string ) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextProps );

const authInitialState: AuthState ={
	status: 'checking',
	token: null,
	errorMessage: '',
	user: null
}


export const AuthProvider = ({children}: any) => {
	
	const [state, dispatch] = useReducer(authReducer, authInitialState);

	useEffect(() => {
		checkToken();
	}, [])

	const checkToken = async() => {
		const token = AsyncStorage.getItem('token');

		if (!token) {
			dispatch({type: 'not-authenticated'});
		}
	}

	
	const signUp = async(registerData: RegisterData ) => {
		
		
		try {
			const { data } = await ecommerceApi.post<RegisterResponse>('/users', { ...registerData });

			console.log(data);

		} catch (error: any) {
			console.log({error});
			
			dispatch({type: 'addError', payload:{ errorMessage: error }})

		}


	}


	const signIn = async({email, password}: LoginData) => {
		
		try {
			
			const { data } = await ecommerceApi.post('/session/login', {email, password});
			
			const { user, token }: LoginResponse = data;

			dispatch({
				type: 'signIn',
				payload: {
					token: token,
					user: user,
				}
			})

			await AsyncStorage.setItem('token', token);

		} catch (error: any) {
			console.log({error: error});

			dispatch({type: 'addError', payload:{ errorMessage: error }})
			
		}
	}

	const updateUser = async( userData: User , id: string ) => {
		
		try {

			const { data } = await ecommerceApi.put<UpdateUserResponse>(`/users/${ id }`, {...userData})

			console.log(data);

			dispatch({
				type: 'updateUser',
				payload:{
					user: data.userUpdated
				}
			})

			
		} catch (error: any) {

			console.log({error: error});

			dispatch({type: 'addError', payload:{ errorMessage: error }})
		}

	}

	
	const logout = async() => {
		dispatch({
			type: 'logOut'
		})
	}

	const uploadImage = async(data: ImagePickerResponse, id: string) => {

		const fileToUpload = {
			uri: data.assets![0].uri,
			type: data.assets![0].type,
			name: data.assets![0].fileName
		};

		const formData = new FormData();
		
		formData.append('file', fileToUpload);

		try {
			
			const { data } = await ecommerceApi.put(`/files/users/${ id }`, formData);

			dispatch({
				type: 'updateUser',
				payload:{
					user: data.model
				}
			})			


		} catch (error) {
			console.log({error});
		}
	}



	
	return(
		<AuthContext.Provider value={{
			...state,
			signUp,
			signIn,
			logout,
			uploadImage,
			updateUser

		}}>
			{ children }
		</AuthContext.Provider>
	)
}