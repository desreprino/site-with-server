import { useEffect, useState } from "react";

import sanityClient from "../utils/sanityClient";

const GoogleMap = () => {
	const [mapHTML, setMapHTML] = useState(
		`<iframe class="googleMap__iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13391.574990812753!2d-60.64012225!3d-32.95381454999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1634155648676!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	);

	useEffect(() => {
		const getPhoneNumber = async () => {
			let [{ valor }] = await sanityClient.fetch(
				`*[_type == "dato" && nombre == "Google maps"]`
			);
			valor = valor.replace(`<iframe `, `<iframe class="googleMap__iframe" `);
			setMapHTML(valor);
		};

		getPhoneNumber();
	}, []);
	return (
		<div className="googleMap">
			<h2 className="googleMap__title">Ubicación</h2>
			<div
				className="googleMap__iframeContainer"
				dangerouslySetInnerHTML={{ __html: mapHTML }}
			></div>
		</div>
	);
};

export default GoogleMap;
