import * as React from 'react';
import { useReducer } from "react";
import { createContext } from "react";
import { authReducer, AuthState } from './authReducer';
import { User } from '../interfaces/app-interfaces';

type AuthContextProps = {
	status: 'checking' | 'authenticated' | 'not-authenticated',
	token: string | null,
	user: User | null,
	errorMessage: string
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
	
	return(
		<AuthContext.Provider value={{
			...state,

		}}>
			{ children }
		</AuthContext.Provider>
	)
}