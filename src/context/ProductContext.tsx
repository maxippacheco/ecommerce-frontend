import React, { createContext, useState } from 'react';
import { Categorie, Product, ProductsResponse } from '../interfaces/app-interfaces';
import ecommerceApi from '../api/ecommerceApi';

type ProductsContextProps = {
	products: Product[],
	getProducts: () => void
}

export const ProductsContext = createContext({} as ProductsContextProps);




export const ProductProvider = ({ children }: any) => {
	
	const [products, setProducts] = useState<Product[]>([]);

	const getProducts = async() => {
		const resp = await ecommerceApi.get<ProductsResponse>('/products');		

		setProducts([...resp.data.products]);		
		
	}

	return(
		<ProductsContext.Provider value={{
			products,
			getProducts
		}}>
			{ children }
		</ProductsContext.Provider>
	);


}