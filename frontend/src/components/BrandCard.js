const BrandCard = ({ brandName, brandImageURL }) => {
	return (
		<div className="aboutUsBrandCard">
			<div className="aboutUsBrandCard__imageContainer">
				<img
					className="aboutUsBrandCard__image"
					src={brandImageURL}
					alt={brandName}
				/>
			</div>
			<span className="aboutUsBrandCard__name">{brandName}</span>
		</div>
	);
};

export default BrandCard;
