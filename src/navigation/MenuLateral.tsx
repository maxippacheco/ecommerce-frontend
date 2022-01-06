import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';
import { useWindowDimensions, StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { HomeScreen } from '../views/HomeScreen';
import { ProfileScreen } from '../views/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../themes/app-theme';
import { LateralMenuItem } from '../components/LateralMenuItem';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartIcon } from '../components/CartIcon';
import { CartScreen } from '../views/CartScreen';

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
				elevation: 0
			}
		}}
    >
      <Drawer.Screen name="HomeScreen"  options={{title: ''}} component={ HomeScreen } />
      <Drawer.Screen name="ProfileScreen"  options={{title:'My Profile', headerTitleAlign: 'center'}} component={ ProfileScreen } />
		<Drawer.Screen name="CartScreen" options={{title: ''}} component={ CartScreen } />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {

	const { logout, user } = useContext(AuthContext);
	
  return (

    <DrawerContentScrollView>
        {/* Parte del avatar */}
       <View style={styles.avatarContainer}>
			
			<Image 
				source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=='}}
				style={styles.avatarIcon}
			/>

			<TouchableOpacity style={styles.imageButton} activeOpacity={0.8}>
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
			onPress={() => navigation.navigate('ProfileScreen')}
		/>

		<LateralMenuItem 
			iconName='search-outline'
			text='Search a product'
			iconColor={globalStyles.primaryColor}
			textColor={globalStyles.primaryColor}
			onPress={() => navigation.navigate('HomeScreen')}
		/>


		<View style={styles.logoutContainer}>
			
			<TouchableOpacity style={styles.logoutButton} activeOpacity={0.8} onPress={logout}>
				<Icon 
					name='arrow-back-outline'
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
		position: 'relative',
		display: 'flex',
		justifyContent: 'flex-end',
		marginLeft: 10
	},
	logoutButton:{
		backgroundColor: globalStyles.primaryColor,
		width: 40,
		height: 40,
		borderRadius: 999,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

});
