import axios from "axios";

const baseURL = 'http://localhost:8080/api'

export const ecommerceApi = axios.create({ baseURL });

// cafeApi.interceptors.request.use(
// 	async ( config ) => {
// 		const token = await AsyncStorage.getItem('token');
		
// 		if ( token ) {
// 			config.headers['x-token'] = token;
// 		}

// 		return config;
// 	}
// );

// export default cafeApi;