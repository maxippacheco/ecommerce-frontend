import * as React from 'react';
import { useReducer } from "react";
import { createContext } from "react";
import { authReducer, AuthState } from './authReducer';
import { User, LoginData, LoginResponse } from '../interfaces/app-interfaces';
import ecommerceApi from '../api/ecommerceApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
	status: 'checking' | 'authenticated' | 'not-authenticated',
	token: string | null,
	user: User | null,
	errorMessage: string,
	signIn: (loginData: LoginData) => void,
	logout: () => void
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


	//TODO: CHECK TOKEN
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


	
	return(
		<AuthContext.Provider value={{
			...state,
			signIn,
			logout

		}}>
			{ children }
		</AuthContext.Provider>
	)
}