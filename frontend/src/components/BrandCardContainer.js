import { useState, useEffect } from "react";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import Card from "./Card";

import { useProductContext } from "../contexts/ProductContext";

export const BrandCardContainer = () => {
	const [recommendedBrands, setRecommendedBrands] = useState([]);

	const { setBrandOptionState } = useProductContext();

	useEffect(() => {
		const query = '*[_type == "marca" && destacada == true][0...3]';

		const getBrands = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const brands = await data?.map((brand) => {
					return {
						name: brand.nombre,
						slug: brand.slug,
						image: urlFor(brand.imagen).url(),
					};
				});
				setRecommendedBrands(brands);
			} catch (error) {
				setRecommendedBrands([]);
				console.log(error);
			}
		};

		getBrands(query);
	}, []);

	useEffect(() => {
		setBrandOptionState("");
	}, [setBrandOptionState]);

	return (
		<div className="brandCardContainer">
			{recommendedBrands.map((brand, index) => {
				const cardClickHandler = () => {
					setBrandOptionState(brand.name);
				};
				return (
					<div
						key={index}
						className="brandCardContainer__card"
						onClick={cardClickHandler}
					>
						<Card
							slug={brand.slug.current}
							name={brand.name}
							image={brand.image}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default BrandCardContainer;
