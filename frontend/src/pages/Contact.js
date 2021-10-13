import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

import whatsappIcon from "../assets/icons/whatsapp_icon.svg";

const Contact = () => {
	return (
		<section className="contact">
			<ContactForm />
			<div className="contact__phoneContainer">
				<img src={whatsappIcon} alt="whatsapp" className="contact__waIcon" />
				<strong className="contact__phoneNumber">11-****-****</strong>
			</div>
			<GoogleMap />
		</section>
	);
};

export default Contact;
