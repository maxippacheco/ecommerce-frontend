import React, { createContext, useState } from 'react';

type ThemeContextProps = {
	isDark: boolean;
	switchTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children}: any) => {
	
	const [isDark, setIsDark] = useState(false);

	const switchTheme = () => {
		setIsDark(!isDark);	
	}

	return(
		<ThemeContext.Provider value={{
			isDark,
			switchTheme
		}}>
			{ children }
		</ThemeContext.Provider>
	);
}