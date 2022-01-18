import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../themes/app-theme';
import { ProductsContext } from '../context/ProductContext';
import { useForm } from '../hooks/useForm';
import { CategoriesSpan } from '../components/CategoriesSpan';
import { useFilterProducts } from '../hooks/useFilterProducts';
import { ProductCard } from '../components/ProductCard';

export const SearchScreen = () => {

  const { categories, products } = useContext( ProductsContext );
  const { productsFilter, setFilterProducts } = useFilterProducts();

  const { form, onChange, setFormValue } = useForm({
    search: ''
  });

  let { search } = form;

  const onSearch = () => {  
    search = search.toLocaleLowerCase();

    setFilterProducts( products.filter( product => product.name.toLocaleLowerCase().includes( search ) ));

    setFormValue({search: ''});

  }

  return (
    <View style={styles.container}>

      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Icon 
          name='search'
          size={ 25 }
          style={styles.searchIcon}
        />
        <TextInput 
          style={styles.searchInput}
          value={ search }
          onChangeText={( value ) => onChange( value, 'search')}
          onEndEditing={ () => onSearch() }
        />

      </View>

      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
      {
        categories.map( (categorie, index) => (
          <CategoriesSpan { ...categorie } key={ index } />
        ))
      }
      </View>
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{flexGrow: 1, justifyContent: 'center' }}>
        {
          (productsFilter.length > 0) 
          ?
          productsFilter.map( product => {
            return(
              <ProductCard { ...product } key={product.id} />
            );
          })
          : 
          // TODO: render conditionally when onSearch its called
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: 'red', fontSize: 20}}>Not found</Text>
          </View>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white'
  },
  searchInput: {
    width: '65%',
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: globalStyles.primaryColor,
    color: globalStyles.primaryColor,
    borderRadius: 9,
    fontSize: 16
  },
  searchIcon: {
    position: 'absolute',
    right: 80,
    color: globalStyles.primaryColor
  }
}); 