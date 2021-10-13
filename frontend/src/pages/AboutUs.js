import AboutUsMain from "../components/AboutUsMain";
import BrandsContainer from "../components/BrandsContainer";

const AboutUs = () => {
	return (
		<section className="aboutUs">
			<AboutUsMain isHome="false" />
			<h2 className="aboutUs__subtitle">TRABAJAMOS CON:</h2>
			<BrandsContainer />
		</section>
	);
};

export default AboutUs;
