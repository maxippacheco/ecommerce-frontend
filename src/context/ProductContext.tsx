import React, { createContext, useState } from 'react';
import { Product, ProductsResponse, Categorie } from '../interfaces/app-interfaces';
import ecommerceApi from '../api/ecommerceApi';

type ProductsContextProps = {
	products: Product[],
	categories: Categorie[],
	getProducts: () => void,
	getCategories: () => void
}

export const ProductsContext = createContext({} as ProductsContextProps);


export const ProductProvider = ({ children }: any) => {

	// TODO: REFACTORIZAR, CREAR REDUCER PARA REEMPLAZARLO POR LOS DOS STATE

	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Categorie[]>([]);

	const getProducts = async() => {
		const resp = await ecommerceApi.get<ProductsResponse>('/products');		

		setProducts([...resp.data.products]);		
		
	}

	const getCategories = async() => {
		const resp = await ecommerceApi.get('/categories');		

		setCategories([...resp.data.categories]);		
		
	}

	return(
		<ProductsContext.Provider value={{
			categories,
			products,
			getProducts,
			getCategories
		}}>
			{ children }
		</ProductsContext.Provider>
	);

}