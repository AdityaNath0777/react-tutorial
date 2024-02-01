import { createContext, useContext } from "react"

export const ThemeContext = createContext({
	themeMode: "light",
	darkTheme: () => { },
	lightTheme: () => { },
});

// export const ThemeContext = createContext({ /* directly giving data to the createContext */});
// it is capable to taking the data


// there are different ways to create context provider

export const ThemeProvider = ThemeContext.Provider;

// create a hook for it
export default function useTheme() {
	return useContext(ThemeContext)
}

// provider was wraping in prev method

// here, we're merging the context and provider
// so now we don't have to create it separately
// and have this separately and provide the values 