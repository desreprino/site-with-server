import { useEffect, useState } from "react";
import { useParams } from "react-router";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import ProductsList from "../components/ProductsList";
import FilterSearchFragment from "../components/FilterSearchFragment";
import BrandCardContainer from "../components/BrandCardContainer";

import { useProductContext } from "../contexts/ProductContext";
import { useRecommendedContext } from "../contexts/RecommendedContext";

const Category = () => {
	const [categoryItem, setCategoryItem] = useState("");

	const { brandsRecommendedInCategory, setBrandsRecommendedInCategory } =
		useRecommendedContext();
	const { setSearchValueState, setCategoryOptionState, setBrandOptionState } =
		useProductContext();

	const { category } = useParams();

	const categoryClickHandler = () => {
		setSearchValueState("");
		setBrandOptionState("");
	};
	useEffect(() => {
		const query = `*[_type == "categoria" && slug.current == "${category}"] `;

		const getImage = async (query) => {
			try {
				const [item] = await sanityClient.fetch(query);

				const gettedItem = {
					name: item.nombre,
					image: urlFor(item.imagen).url(),
				};

				setCategoryItem(gettedItem);
				setCategoryOptionState(gettedItem.name);
			} catch (error) {
				setCategoryItem({});
				console.log(error);
			}
		};
		getImage(query);
	}, [category, setCategoryOptionState]);

	useEffect(() => {
		const query = `*[_type == "destacados" && nombre == "Marcas en Categoría"]`;

		const getRecommended = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const isRecommended = data[0].destacada;
				setBrandsRecommendedInCategory(isRecommended);
			} catch (error) {
				setBrandsRecommendedInCategory([]);
				console.log(error);
			}
		};

		getRecommended(query);
	}, [setBrandsRecommendedInCategory]);

	return (
		<section className="category">
			<figure
				className={`category__name  ${
					!categoryItem.image && "category__name--isntImage"
				}`}
				onClick={categoryClickHandler}
			>
				{categoryItem.image && (
					<img
						src={categoryItem.image}
						alt={category}
						className="category__image"
					/>
				)}
				<h1 className="category__title">{categoryItem.name}</h1>
			</figure>
			{brandsRecommendedInCategory && <BrandCardContainer />}
			<FilterSearchFragment stateSetter={setSearchValueState} />
			<ProductsList />
		</section>
	);
};

export default Category;
