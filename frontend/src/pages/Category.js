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
	const [image, setImage] = useState("");

	const { brandsRecommendedInCategory, setBrandsRecommendedInCategory } =
		useRecommendedContext();
	const { setSearchValueState } = useProductContext();

	const { category } = useParams();

	useEffect(() => {
		const query = `*[_type == "categoria" && slug.current == "${category}"] `;

		const getImage = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const gettedImage = urlFor(data[0].imagen).url();

				setImage(gettedImage);
			} catch (error) {
				setImage("");
				console.log(error);
			}
		};

		getImage(query);
	}, [category]);

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
			<div
				className={`category__name  ${!image && "category__name--isntImage"}`}
			>
				{image && (
					<img src={image} alt={category} className="category__image" />
				)}
				<h1 className="category__title">{category}</h1>
			</div>
			{brandsRecommendedInCategory && <BrandCardContainer />}
			<FilterSearchFragment stateSetter={setSearchValueState} />
			<ProductsList />
		</section>
	);
};

export default Category;
