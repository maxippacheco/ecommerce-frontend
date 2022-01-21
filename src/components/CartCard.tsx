import React, { useContext } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useUnits} from '../hooks/useCounter';
import { globalStyles } from '../themes/app-theme';
import { Product } from '../interfaces/app-interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';


export const CartCard = (props: Product) => {

	const { removeToCart } = useContext(CartContext);

	const {units, less, add} = useUnits();

	const deleteElement = () => {
		removeToCart(props);
	}

  	return (
  	  <View style={styles.cartCardContainer}>
  	    <Image source={{uri: props.img}} style={styles.image} />

	      <View style={styles.contentContainer}>
	        <View>
	          <Text style={styles.cartCardTitle}>{props.name}</Text>
	          <Text style={{color: 'green', fontSize: 14}}>${props.price}</Text>
	     </View>

        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={styles.unitsContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.unitsButton}
              onPress={add}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444'}}>
                +
              </Text>
            </TouchableOpacity>

            <View style={{width: 20, display: 'flex', alignItems: 'center'}}>
              <Text style={{color: '#444'}}>{units}</Text>
            </View>

            <TouchableOpacity style={styles.unitsButton} onPress={less}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444'}}>
                -
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.trashButton} onPress={deleteElement}>
            <Icon name="trash" size={20} color={'red'} style={{color: 'red'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
		cartCardContainer:{
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 8,
		marginVertical: 10,
		marginHorizontal: 10,
		borderWidth: 1.5,
		borderColor: '#ccc'
	},
	image:{
		width: 120,
		height: 120,
		borderRadius: 999,
		backgroundColor: 'white',
		marginVertical: 10,
		marginHorizontal: 10,
	},
	contentContainer:{
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	cartCardTitle:{
		marginBottom: 20, 
		fontSize: 15, 
		color: globalStyles.titleColor, 
		fontWeight: '600'
	},
	unitsContainer:{
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		borderWidth: 1, 
		borderColor: '#949494', 
		marginBottom: 12,
		borderRadius: 3
	},
	unitsButton:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 30,
		height: 30,
	},
	trashButton:{
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		width: 30, 
		height: 30, 
		borderWidth: 1.5, 
		borderColor: 'red', 
		borderRadius: 999
	},
});
