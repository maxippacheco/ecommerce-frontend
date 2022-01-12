import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';
import { useWindowDimensions, StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { HomeScreen } from '../views/HomeScreen';
import { ProfileScreen } from '../views/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../themes/app-theme';
import { LateralMenuItem } from '../components/LateralMenuItem';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartIcon } from '../components/CartIcon';
import { CartScreen } from '../views/CartScreen';
import { SearchScreen } from '../views/SearchScreen';
import { ThemeContext } from '../context/ThemeContext';
import * as ImagePicker from "react-native-image-picker"


const height = Dimensions.get('window').height;
const Drawer = createDrawerNavigator();

interface Props extends DrawerScreenProps<any, any>{};

export const MenuLateral = ({navigation}:Props) => {

	const dimensions = useWindowDimensions();


  return (
   <Drawer.Navigator
		drawerContent = { (props) => <MenuInterno {...props} />  } 	
		screenOptions={{
			drawerStyle: {
				borderTopEndRadius: 30,
				borderBottomEndRadius: 30
			},	
			drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
			headerRight: ()=> (
				<CartIcon onPress={() => navigation.navigate('CartScreen')} />
			),
			headerStyle:{
				elevation: 0,
			}
		}}
    >
      <Drawer.Screen name="HomeScreen"  options={{title: ''}} component={ HomeScreen } />
      <Drawer.Screen name="ProfileScreen"  options={{title:'My Profile', headerTitleAlign: 'center'}} component={ ProfileScreen } />
		<Drawer.Screen name="CartScreen" options={{title: ''}} component={ CartScreen } />
		<Drawer.Screen name="SearchScreen" options={{title: ''}} component={ SearchScreen } />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {

	const { logout, user, uploadImage } = useContext(AuthContext);
	const { isDark, switchTheme } = useContext( ThemeContext );

	const takePhoto = () => {
		ImagePicker.launchCamera({
			mediaType: 'photo',
			quality: 0.5
		}, (resp) => {
			
			if( resp.didCancel ) return;
			if( !resp.assets![0].uri) return;

			uploadImage( resp, user!.id);			
			

		})
	}

  	return (

    <DrawerContentScrollView>
        {/* Parte del avatar */}
       <View style={styles.avatarContainer}>
			
			{/* TODO: renderizar condicionalmente la imagen */}
			{/* TODO: actualizar la imagen instantaneamente en el navbar => hacer un reload o algo xd */}
			<Image source={{uri: user?.img}} style={styles.avatarIcon}/>

			<TouchableOpacity style={styles.imageButton} activeOpacity={0.8} onPress={takePhoto}>
				<Icon 
					name='add'
					size={30}
					color='white'
				/>
			</TouchableOpacity>
			

			<Text style={styles.title}>{user?.username}</Text>
			<Text style={{marginBottom: 20}}>{user?.email}</Text>	
	
		</View>
		
		
		<LateralMenuItem 
			iconName='home-outline'
			text='Home'
			iconColor={globalStyles.primaryColor}
			textColor={globalStyles.primaryColor}
			onPress={() => navigation.navigate('HomeScreen')}
		/>
		
		<LateralMenuItem 
			iconName='person-outline'
			text='Profile'
			iconColor={globalStyles.primaryColor}
			textColor={globalStyles.primaryColor}
			onPress={() => navigation.navigate('ProfileScreen')}
		/>

		<LateralMenuItem 
			iconName='cart-outline'
			text='Your cart'
			iconColor={globalStyles.primaryColor}
			textColor={globalStyles.primaryColor}
			onPress={() => navigation.navigate('CartScreen')}
		/>

		<LateralMenuItem 
			iconName='search-outline'
			text='Search a product'
			iconColor={globalStyles.primaryColor}
			textColor={globalStyles.primaryColor}
			onPress={() => navigation.navigate('SearchScreen')}
		/>


		<View style={styles.logoutContainer}>
			
			<View style={{ marginBottom: 5, marginLeft: 10}}>
				<Switch
					trackColor={{ false: "whitemoske", true: "black" }}
					thumbColor={isDark ? "gray" : "white"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={switchTheme}
					value={isDark}
				/>
			</View>
			
			<TouchableOpacity style={styles.logoutButton} activeOpacity={0.8} onPress={logout}>
				<Icon 
					name='log-out-outline'
					size={20}
					color='white'
				/>
			</TouchableOpacity>


		</View>


    </DrawerContentScrollView>

	);

}

const styles = StyleSheet.create({
	avatarContainer: {
		alignItems: 'center',
	},
	avatarIcon: {
		width: 150,
		height: 150,
		borderRadius: 999,
		marginVertical: 20
	},
	title:{
		fontSize: 20,
		textAlign: 'center',
		color: globalStyles.titleColor 
	},
	imageButton:{
		position: 'absolute',
		top: 140,
		right: 90,
		backgroundColor: globalStyles.primaryColor,
		borderRadius: 999,
		width: 35,
		height: 35,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logoutContainer:{
		height: height / 3.4,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		flexDirection: 'row',
		marginRight: 10,
	},
	logoutButton:{
		backgroundColor: 'red',
		width: 40,
		height: 40,
		borderRadius: 999,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

});
