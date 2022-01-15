import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { Categorie } from '../interfaces/app-interfaces';
import {globalStyles} from '../themes/app-theme';
import { useFilterProducts } from '../hooks/useFilterProducts';


// props = categorie
export const CategoriesSpan = (props: Categorie) => {

	const { filterProductByCategorie } = useFilterProducts();	

	return (
    <TouchableOpacity
      style={{
        backgroundColor: globalStyles.primaryColor,
        marginRight: 10,
        padding: 5,
        borderRadius: 10,
      }}
      onPress={() => filterProductByCategorie(props)}>
      <Text style={{color: 'white'}}>{props.name}</Text>
    </TouchableOpacity>
  );
};
