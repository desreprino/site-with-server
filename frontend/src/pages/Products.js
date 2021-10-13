import { useEffect } from "react";

import sanityClient from "../utils/sanityClient";

import CategoryCardContainer from "../components/CategoryCardContainer";
import FilterBox from "../components/FilterBox";
import ProductsList from "../components/ProductsList";

import { useRecommendedContext } from "../contexts/RecommendedContext";

const Products = () => {
	const {
		categoriesRecommendedInProducts,
		setCategoriesRecommendedInProducts,
	} = useRecommendedContext();

	useEffect(() => {
		const query = `*[_type == "destacados" && nombre == "Categorías en Productos"]`;

		const getRecommended = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const isRecommended = data[0].destacada;
				setCategoriesRecommendedInProducts(isRecommended);
			} catch (error) {
				setCategoriesRecommendedInProducts([]);
				console.log(error);
			}
		};

		getRecommended(query);
	}, [setCategoriesRecommendedInProducts]);
	return (
		<section className="products">
			{categoriesRecommendedInProducts && <CategoryCardContainer />}
			<FilterBox />
			<ProductsList />
		</section>
	);
};

export default Products;
