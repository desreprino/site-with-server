const BrandCard = ({ brandName, brandImageURL }) => {
	return (
		<div className="aboutUsBrandCard">
			<figure className="aboutUsBrandCard__imageContainer">
				<img
					className="aboutUsBrandCard__image"
					src={brandImageURL}
					alt={brandName}
				/>
			</figure>
			<span className="aboutUsBrandCard__name">{brandName}</span>
		</div>
	);
};

export default BrandCard;
