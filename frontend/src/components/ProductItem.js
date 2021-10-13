import { Link } from "react-router-dom";

const ProductItem = ({ name, slug }) => {
	return (
		<li className="productItem">
			<Link to="/">{name}</Link>
		</li>
	);
};

export default ProductItem;
