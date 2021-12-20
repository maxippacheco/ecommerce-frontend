import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text>About</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow'
	}
});