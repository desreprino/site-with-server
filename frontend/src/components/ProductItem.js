import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {

	
	return (
		<li className="productItem">
			<Link to={`/product/${product.slug.current}`}>{product.name}</Link>
		</li>
	);
};

export default ProductItem;
