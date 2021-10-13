import loadingSpinner from "../assets/icons/loading_spinner.png";

const Loading = () => {
	return (
		<div className="loading">
			<img src={loadingSpinner} alt="loading" className="loading__wheel" />
			<span className="loading__text">cargando</span>
		</div>
	);
};

export default Loading;
