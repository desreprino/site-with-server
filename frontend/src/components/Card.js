const Card = ({ name, image }) => {
	return (
		<div className="card">
			<div className="card__imageContainer">
				<img className="card__image" src={image} alt={name} />
			</div>
			<strong className="card__name">{name}</strong>
		</div>
	);
};

export default Card;
