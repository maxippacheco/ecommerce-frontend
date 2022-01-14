import { User } from "../interfaces/app-interfaces";

export interface AuthState {
	status: 'checking' | 'authenticated' | 'not-authenticated',
	token: string | null,
	user: User | null,
	errorMessage: string
}

type ActionType = 
	| { type: 'signIn', payload: {token: string, user: User} }
	| { type: 'updateUser', payload: { user: User} }
	| { type: 'logOut' }
	| { type: 'addError', payload:{ errorMessage: string } }
	| { type: 'removeError'}
	| { type: 'not-authenticated'}



export const authReducer = ( state: AuthState , action: ActionType ): AuthState => {

	switch (action.type) {
		case 'signIn':
			return{
				...state,
				status: 'authenticated',
				token: action.payload.token,
				user: action.payload.user,
				errorMessage: ''
			};

		case 'updateUser':
			return{
				...state,
				status: 'authenticated',
				user: action.payload.user,
				errorMessage: ''
			}

			case 'addError':
				return{
					...state,
					user: null,
					token: null,
					status: 'not-authenticated',
					errorMessage: action.payload.errorMessage
				}

			case 'removeError':
				return{
					...state,
					errorMessage: ''
				}

			case 'not-authenticated':
			case 'logOut':
				return{
					...state,
					status: 'not-authenticated',
					token: null,
					user: null
				}
	
		default:
			return state;
	}
}