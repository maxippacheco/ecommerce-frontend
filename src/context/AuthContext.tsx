import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { createContext } from "react";
import { authReducer, AuthState } from './authReducer';
import { User, LoginData, LoginResponse } from '../interfaces/app-interfaces';
import ecommerceApi from '../api/ecommerceApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImagePickerResponse } from 'react-native-image-picker';

type AuthContextProps = {
	status: 'checking' | 'authenticated' | 'not-authenticated',
	token: string | null,
	user: User | null,
	errorMessage: string,
	signIn: (loginData: LoginData) => void,
	logout: () => void,
	uploadImage: (data: ImagePickerResponse, id: string) => void
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
			

		// const resp = await ecommerceApi.post<LoginResponse>('/session/login');

	}

	
	// TODO: REGISTER 

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
			
			const resp = await ecommerceApi.put(`/files/users/${ id }`, formData);			

			console.log(resp);

		} catch (error) {
			console.log({error});
		}
	}


	
	return(
		<AuthContext.Provider value={{
			...state,
			signIn,
			logout,
			uploadImage

		}}>
			{ children }
		</AuthContext.Provider>
	)
}