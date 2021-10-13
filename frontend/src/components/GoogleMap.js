const GoogleMap = () => {
	return (
		<div className="googleMap">
			<h2 className="googleMap__title">Ubicación</h2>
			<iframe
				className="googleMap__iframe"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.218020715774!2d-58.45513748423689!3d-34.598648064738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca07f2a96f01%3A0x677b64c7b2c5c503!2sAvenida%20Warnes%20%26%20Sunchales%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1633528398844!5m2!1ses-419!2sar"
				width="700"
				height="300"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
				title="Ubicacion"
				loading="lazy"
			/>
		</div>
	);
};

export default GoogleMap;
