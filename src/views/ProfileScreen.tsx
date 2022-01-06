import React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ecommerceApi from '../api/ecommerceApi';
import { AuthContext } from '../context/AuthContext';
import { useImage } from '../hooks/useImage';

export const ProfileScreen = () => {
	
	const { user } = useContext(AuthContext);

	// console.log(user.id);
	

	// const getUserById = async() => {
	// 	const resp = await ecommerceApi.get(`/users/${user?.id}`);
	
	// 	console.log(resp.data);
		
	// }
	
	// useEffect(() => {
	// 	getUserById();
	// }, []);

	

	return (
		<View style={styles.container}>
			<View>
				
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});