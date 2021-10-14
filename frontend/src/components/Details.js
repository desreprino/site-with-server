import { useEffect, useState } from "react";

import sanityClient from "../utils/sanityClient";

import whatsappIcon from "../assets/icons/whatsapp_icon.svg";
const Details = ({
	product: {
		image,
		name,
		link,
		slug: { current: slug },
	},
}) => {
	const [engines, setEngines] = useState([]);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [whatsappMessage, setWhatsappMessage] = useState(
		`Hola! Quisiera que me coticen el producto ${name}`
	);

	useEffect(() => {
		const getPhoneNumber = async () => {
			const [{ valor }] = await sanityClient.fetch(
				`*[_type == "dato" && nombre == "Teléfono"]`
			);

			setPhoneNumber(valor);
		};
		const getWhatsappMessage = async () => {
			const [{ valor }] = await sanityClient.fetch(
				`*[_type == "dato" && nombre == "Mensaje por WhatsApp"]`
			);
			const valorReemplazado = valor.replace("{producto}", name);
			setWhatsappMessage(valorReemplazado);
		};

		getPhoneNumber();
		getWhatsappMessage();
	}, [name]);
	useEffect(() => {
		const query = `*[_type == "motor" && _id in *[_type == "producto" && slug.current == "${slug}"][0].motores[]._ref]`;

		const getEngines = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				for (let engineIndex in data) {
					const engine = data[engineIndex];

					const query = `*[_type == "marca" && _id == "${engine.marca._ref}"]`;

					const [{ nombre: brand }] = await sanityClient.fetch(query);

					data[engineIndex] = { name: engine.nombre, brand };
				}

				setEngines(data);
			} catch (error) {
				console.log(error);
			}
		};

		getEngines(query);
	}, [slug]);

	return (
		<div className="details">
			<figure className="details__imgContainer">
				<img src={image} alt="productImg" className="details__image"></img>
				<a
					href={`https://api.whatsapp.com/send?text=${escape(
						whatsappMessage
					)} &phone=+549${phoneNumber}`}
					target="_blank"
					rel="noreferrer noopener"
				>
					<button className="details__wppButton">
						<img
							src={whatsappIcon}
							alt="whatsapp"
							className="details__whatsappIcon"
						/>
						Cotizar
					</button>
				</a>
			</figure>

			<h1 className="details__title">
				{link ? <a href={link}>{name}</a> : name}
			</h1>

			{engines.length > 0 ? (
				<ul className="details__aplicationsList">
					Aplicación:{" "}
					{engines.map((engine, index) => {
						return (
							<li className="details__aplicationItem" key={index}>
								{index ? `,` : ``}
								{` ${engine.brand} ${engine.name}`}
							</li>
						);
					})}
				</ul>
			) : (
				""
			)}
		</div>
	);
};

export default Details;
