import { RegisterData } from '../interfaces/app-interfaces';


interface Props{
	firstName?: string;
	lastName?: string;
	username?: string;
	email: string;
	password: string;

}

export const validateForm = ({ firstName, lastName, email, username, password}: Props) => {

	if ( !firstName || !lastName || !email || !username || !password ) {
		return false;
	}

	return true;
}
