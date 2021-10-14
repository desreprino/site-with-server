import { useEffect, useState } from "react";
import { useParams } from "react-router";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import Details from "../components/Details";
import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductDetail = () => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { slug } = useParams();

	useEffect(() => {
		const query = `*[_type == "producto" && slug.current == "${slug}"]`;

		const getProducts = async (query) => {
			try {
				setIsError(false);
				setIsLoading(true);

				const data = await sanityClient.fetch(query);

				const [item] = await data?.map((product) => {
					return {
						name: product.nombre,
						slug: product.slug,
						image: urlFor(product.imagen).url(),
						link: product.link,
					};
				});

				setProduct(item);
				setIsLoading(false);
			} catch (error) {
				setProduct([]);
				setIsLoading(false);
				setIsError(true);
				console.log(error);
			}
		};

		getProducts(query);
	}, [slug]);

	return (
		<section className="productDetail">
			{isLoading ? (
				<Loading />
			) : isError || product.length === 0 ? (
				<Message>No se encontró el producto seleccionado</Message>
			) : (
				<>
					<Details product={product} />
				</>
			)}
		</section>
	);
};

export default ProductDetail;
