

const Details = ({ product }) => {
	return (
        <div className="details">
            <div className="details__imgContainer">
                <img src={product[0].image} alt="productImg"></img>
                <a href={`https://api.whatsapp.com/send?text=Hola%2c+me+gustaría+saber+el+precio+del+producto:+${product[0].name} &phone=+54 9 11 3688-7118`} target="_blank" rel="noreferrer noopener">
                    <button className="details__imgContainer__wppButton">Cotizar por Wpp</button>
                </a>
            </div>
            <h1 className="details__title"> {product[0].name} </h1>
            <p>Aplication: </p>
        </div>
	);
};

export default Details;
