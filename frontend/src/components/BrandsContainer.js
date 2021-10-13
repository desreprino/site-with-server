import { useEffect, useState } from "react";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images.js";

import BrandCard from "./BrandCard";

const BrandsContainer = () => {
	const [recommendedBrands, setRecommendedBrands] = useState([]);

	useEffect(() => {
		const query = '*[_type == "marca" && destacada == true]';

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

	return (
		<div className="brandsContainer">
			{recommendedBrands.map((brand, index) => {
				return (
					<BrandCard
						key={index}
						slug={brand.slug}
						brandName={brand.name}
						brandImageURL={brand.image}
					/>
				);
			})}
		</div>
	);
};

export default BrandsContainer;
