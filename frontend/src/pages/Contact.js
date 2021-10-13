import { useEffect, useState } from "react";

import sanityClient from "../utils/sanityClient";

import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

import whatsappIcon from "../assets/icons/whatsapp_icon.svg";

const Contact = () => {
	const [phoneNumber, setPhoneNumber] = useState("11-****-****");

	useEffect(() => {
		const getPhoneNumber = async () => {
			const [{ valor }] = await sanityClient.fetch(
				`*[_type == "dato" && nombre == "Teléfono"]`
			);

			setPhoneNumber(valor);
		};

		getPhoneNumber();
	}, []);

	return (
		<section className="contact">
			<ContactForm />
			<div className="contact__phoneContainer">
				<img src={whatsappIcon} alt="whatsapp" className="contact__waIcon" />
				<strong className="contact__phoneNumber">{phoneNumber}</strong>
			</div>
			<GoogleMap />
		</section>
	);
};

export default Contact;
