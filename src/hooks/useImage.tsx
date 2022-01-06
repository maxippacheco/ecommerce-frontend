// import { User } from '../interfaces/app-interfaces';
// import ecommerceApi from '../api/ecommerceApi';
// import { useEffect, useState } from 'react';
// // TODO: Create a hook with a imgState that provides the user image

// interface Props{
// 	user: User | null
// }

// export const useImage = ({ user }: Props) => {

// 	const [image, setImage] = useState<string>('');
	
// 	const getUserById = async() => {
// 		const resp = await ecommerceApi.get(`/users/${user?.id}`);
	
// 		setImage(resp.data.img);
// 	}
	
// 	useEffect(() => {
// 		getUserById();
// 	}, []);

// 	return[
// 		image
// 	]

// }
