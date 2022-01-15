import React from 'react';
import {Text, View} from 'react-native';
import {ProductsContext} from '../context/ProductContext';
import {useContext, useEffect} from 'react';
import { ProductCard } from './ProductCard';

export const ProductsLayout = () => {
  const {getProducts, products, getCategories} = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  if (!products) {
    return (
      // TODO: Loader
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {products.map(product => (
			<ProductCard {...product} key={product.id} />
      ))}
    </>
  );
};
