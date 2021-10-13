import { createContext, useContext, useState } from "react";

const RecommendedContext = createContext({});

export const useRecommendedContext = () => {
	return useContext(RecommendedContext);
};
export const RecommendedContextProvider = ({ children }) => {
	const [categoriesRecommendedInHome, setCategoriesRecommendedInHome] =
		useState([]);
	const [categoriesRecommendedInProducts, setCategoriesRecommendedInProducts] =
		useState([]);
	const [brandsRecommendedInCategory, setBrandsRecommendedInCategory] =
		useState([]);

	return (
		<RecommendedContext.Provider
			value={{
				categoriesRecommendedInHome,
				setCategoriesRecommendedInHome,
				categoriesRecommendedInProducts,
				setCategoriesRecommendedInProducts,
				brandsRecommendedInCategory,
				setBrandsRecommendedInCategory,
			}}
		>
			{children}
		</RecommendedContext.Provider>
	);
};
