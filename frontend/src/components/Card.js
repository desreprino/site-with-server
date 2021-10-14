const Card = ({ name, image }) => {
	return (
		<div className="card">
			<figure className="card__imageContainer">
				<img className="card__image" src={image} alt={name} />
			</figure>
			{name ? <strong className="card__name">{name}</strong> : ""}
		</div>
	);
};

export default Card;
