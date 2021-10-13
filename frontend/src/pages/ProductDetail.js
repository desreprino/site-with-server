import Details from '../components/Details'

import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import sanityClient from "../utils/sanityClient";
import { urlFor } from "../utils/images";

import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductDetail = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
    const { slug } = useParams();

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
                console.log(data)

				const products = await data?.map((product) => {
                        return {
                            name: product.nombre,
                            slug: product.slug,
                            image: urlFor(product.imagen).url(),
                        };	
				});

                const productDetail = products?.filter(product => product.slug.current === slug)

				setProduct(productDetail);
				setIsLoading(false);
			} catch (error) {
				setProduct([]);
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
        slug
	]);

	return (
		<section className="">
            {isLoading ? (
				<Loading />
			) : isError || product.length === 0 ? (
				<Message>No se encontró el producto seleccionado</Message>
			) : (
			<>
                <Details product={product} />
            </>
            )
            }
		</section>
	);
};

export default ProductDetail;
