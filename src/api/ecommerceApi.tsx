import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = 'YOUR_API';

const ecommerceApi = axios.create({ baseURL });

ecommerceApi.interceptors.request.use(
	async ( config ) => {
		const token = await AsyncStorage.getItem('token');
		
		if ( token ) {
			config.headers!['x-token'] = token;
		}

		return config;
	}
);

export default ecommerceApi;
