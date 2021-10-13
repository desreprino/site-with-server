import { useEffect, useState } from "react";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import Loading from "./Loading";
import ProductItem from "./ProductItem";
import Message from "./Message";

import { useProductContext } from "../contexts/ProductContext";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const {
		categoryOptionState,
		setCategoryOptionState,
		brandOptionState,
		setBrandOptionState,
		engineOptionState,
		setEngineOptionState,
		searchValueState,
	} = useProductContext();

	useEffect(() => {
		setCategoryOptionState("");
		setBrandOptionState("");
		setEngineOptionState("");
	}, [setBrandOptionState, setCategoryOptionState, setEngineOptionState]);

	useEffect(() => {
		const categoryPartQuery = `categoria._ref in *[_type=="categoria" && nombre=="${categoryOptionState}"]._id`;
		const brandPartQuery = `marca._ref in *[_type=="marca" && nombre=="${brandOptionState}"]._id`;
		const enginePartQuery = `motor._ref in *[_type=="motor" && nombre=="${engineOptionState}"]._id`;
		const searchPartQuery = `nombre match "*${searchValueState}*"`;

		const query = `*[_type == "producto"${
			categoryOptionState && ` && ${categoryPartQuery}`
		}${brandOptionState && ` && ${brandPartQuery}`}${
			engineOptionState && ` && ${enginePartQuery}`
		}${searchValueState && ` && ${searchPartQuery}`}]`;

		const getProducts = async (query) => {
			try {
				setIsError(false);
				setIsLoading(true);

				const data = await sanityClient.fetch(query);

				const products = await data?.map((product) => {
					return {
						name: product.nombre,
						slug: product.slug,
						image: urlFor(product.imagen).url(),
					};
				});

				setProducts(products);

				setIsLoading(false);
			} catch (error) {
				setProducts([]);
				setIsLoading(false);
				setIsError(true);
				console.log(error);
			}
		};

		getProducts(query);
	}, [
		brandOptionState,
		categoryOptionState,
		engineOptionState,
		searchValueState,
	]);
	return (
		<ul className="productList">
			{isLoading ? (
				<Loading />
			) : isError || products.length === 0 ? (
				<Message>No hay productos</Message>
			) : (
				products.map((product, index) => {
					return (
						<ProductItem name={product.name} slug={product.slug} key={index} />
					);
				})
			)}
		</ul>
	);
};
export default ProductsList;
