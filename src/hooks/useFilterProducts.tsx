import { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductContext';
import { Categorie, Product } from "../interfaces/app-interfaces";

export const useFilterProducts = () => {
	
  const { products } = useContext( ProductsContext );

	const [productsFilter, setFilterProducts] = useState<Product[]>([]);

	const filterProductByCategorie = (categorie: Categorie) => {		

    	setFilterProducts(products.filter(product => product.categorie.name === categorie.name));
    	console.log(productsFilter);
  	}	
  

	return {
		productsFilter,
		setFilterProducts,
		filterProductByCategorie
	}
}
