import { createContext, useContext, useState } from "react";

const ProductContext = createContext({});

export const useProductContext = () => {
	return useContext(ProductContext);
};
export const ProductContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [brands, setBrands] = useState([]);
	const [engines, setEngines] = useState([]);

	const [categoryOptionState, setCategoryOptionState] = useState("");
	const [brandOptionState, setBrandOptionState] = useState("");
	const [engineOptionState, setEngineOptionState] = useState("");
	const [searchValueState, setSearchValueState] = useState("");

	return (
		<ProductContext.Provider
			value={{
				categories,
				setCategories,
				brands,
				setBrands,
				engines,
				setEngines,
				categoryOptionState,
				setCategoryOptionState,
				brandOptionState,
				setBrandOptionState,
				engineOptionState,
				setEngineOptionState,
				searchValueState,
				setSearchValueState,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
