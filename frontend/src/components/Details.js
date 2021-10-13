import { Link } from "react-router-dom";

const Details = ({ product }) => {

	
	return (
        <div className="details">
            <div className="details__imgContainer">
                <img src={product[0].image} alt="productImg"></img>
                <Link to="/">
                    <button className="details__imgContainer__wppButton">Cotizar por Wpp</button>
                </Link>
            </div>
            <h1 className="details__title"> {product[0].name} </h1>
            <p>Aplication: </p>
        </div>
	);
};

export default Details;
