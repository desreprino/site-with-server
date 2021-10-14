import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import Card from "./Card";

const CategoryCardContainer = () => {
	const [recommendedCategories, setRecommendedCategories] = useState([]);
	useEffect(() => {
		const query = '*[_type == "categoria" && destacada == true][0...3]';

		const getCategories = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const categories = await data?.map((category) => {
					return {
						name: category.nombre,
						slug: category.slug.current,
						image: urlFor(category.imagen).url(),
					};
				});
				setRecommendedCategories(categories);
			} catch (error) {
				setRecommendedCategories([]);
				console.log(error);
			}
		};

		getCategories(query);
	}, []);
	return (
		<div
			className={`categoryCardContainer ${
				recommendedCategories?.length < 3
					? "categoryCardContainer--lessThanThree"
					: ""
			}`}
		>
			{recommendedCategories.map((category, index) => {
				return (
					<Link
						key={index}
						className="categoryCardContainer__link"
						to={`/categorias/${category.slug}`}
					>
						<Card name={category.name} image={category.image} />
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryCardContainer;
