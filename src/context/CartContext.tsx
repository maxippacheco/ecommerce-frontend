import React, { useState, createContext } from 'react';
import { Product } from '../interfaces/app-interfaces';

type CartContextProps = {
	cart: Product[],
	addToCart: (element: Product) => void,
	removeToCart: (element: Product) => void,
	clearCart: () => void
}

export const CartContext = createContext({} as CartContextProps);


export const CartProvider = ({ children }: any) => {
	
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (element: Product) => {
		setCart([element, ...cart]);
	}

	const removeToCart = (element: Product) => {
		setCart(product => product.filter(el => el.id !== element.id));
	}

	const clearCart = () => {
		setCart([]);	
	}

	return(
		<CartContext.Provider value={{
			cart,
			addToCart,
			removeToCart,
			clearCart
		}}>
			{ children }
		</CartContext.Provider>
	);

}