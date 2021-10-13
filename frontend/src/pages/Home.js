import { useEffect } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../utils/sanityClient";

import AboutUsMain from "../components/AboutUsMain";
import CategoryCardContainer from "../components/CategoryCardContainer";
import Carousel from "../components/Carousel";

import { useRecommendedContext } from "../contexts/RecommendedContext";

const Home = () => {
	const { categoriesRecommendedInHome, setCategoriesRecommendedInHome } =
		useRecommendedContext();

	useEffect(() => {
		const query = `*[_type == "destacados" && nombre == "Categorías en Home"]`;

		const getRecommended = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const isRecommended = data[0].destacada;
				setCategoriesRecommendedInHome(isRecommended);
			} catch (error) {
				setCategoriesRecommendedInHome([]);
				console.log(error);
			}
		};

		getRecommended(query);
	}, [setCategoriesRecommendedInHome]);

	return (
		<section className="home">
			<Carousel />
			<div className="home__container">
				<AboutUsMain isHome="true" />
			</div>
			{categoriesRecommendedInHome && (
				<div className="home__container">
					<CategoryCardContainer />
				</div>
			)}
			<Link to="/productos" className="home__moreProductsLink">
				<button className="home__moreProductsButton">Más productos</button>
			</Link>
		</section>
	);
};

export default Home;
