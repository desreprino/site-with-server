import { Link } from "react-router-dom";

const ProductItem = ({ product: { slug, name } }) => {
	return (
		<li className="productItem">
			<Link exact to={`/productos/${slug.current}`}>
				{name}
			</Link>
		</li>
	);
};

export default ProductItem;
