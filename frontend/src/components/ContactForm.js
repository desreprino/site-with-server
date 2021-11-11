import axios from "axios";
import { useState } from "react";

import sanityClient from "../utils/sanityClient";

import Message from "./Message";

const ContactForm = () => {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [celValue, setCelValue] = useState("");
	const [messageValue, setMessageValue] = useState("");
	const [isIncorrectCel, setIsIncorrectCel] = useState(false);
	const [isOk, setIsOk] = useState(false);
	const [isError, setIsError] = useState(false);

	const regexp = /([0-9]{10})/;

	const submitFormHandler = async (event) => {
		try {
			event.preventDefault();
			setIsIncorrectCel(false);
			setIsError(false);
			setIsOk(false);

			const [{ valor: correoReceptor }] = await sanityClient.fetch(
				`*[_type == "dato" && nombre == "Correo electrónico receptor"]`
			);

			if (regexp.test(celValue)) {
				const info = await axios({
					method: "post",
					url: "/sendmail",
					data: {
						to: `${correoReceptor ? correoReceptor : ""}`,
						subject: `Mensaje de ${nameValue}`,
						html: `	<p><b>Nombre:</b> ${nameValue}</p>
								<p><b>E-mail:</b> ${emailValue}</p>
								<p><b>Teléfono:</b> ${celValue}</p>
								<p><b>Mensaje:</b> ${messageValue}</p>
						`,
					},
				});

				setNameValue("");
				setEmailValue("");
				setMessageValue("");
				setCelValue("");

				if (info.status === 200) {
					setIsOk(true);
					const timer = setTimeout(() => {
						setIsOk(false);
						clearTimeout(timer);
					}, 3000);
				} else {
					throw new Error("Ha ocurrido un error");
				}
			} else {
				setIsIncorrectCel(true);
			}
		} catch (error) {
			console.log(error);
			setIsError(true);
		}
	};

	return (
		<form className="contactForm" onSubmit={submitFormHandler}>
			<div className="contactForm__inputContainer">
				<label htmlFor="name" className="contactForm__label">
					Nombre
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="contactForm__input"
					value={nameValue}
					onChange={(event) => {
						setNameValue(event.target.value);
					}}
					required
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="email" className="contactForm__label">
					E-mail
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="contactForm__input"
					value={emailValue}
					onChange={(event) => {
						setEmailValue(event.target.value);
					}}
					required
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="phoneNumber" className="contactForm__label">
					Celular
				</label>
				<input
					type="text"
					name="phoneNumber"
					id="phoneNumber"
					className="contactForm__input"
					value={celValue}
					onChange={(event) => {
						setCelValue(event.target.value);
					}}
					required
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="message" className="contactForm__label">
					Mensaje
				</label>
				<textarea
					type="text"
					name="message"
					id="message"
					className="contactForm__input contactForm__input--textarea"
					value={messageValue}
					onChange={(event) => {
						setMessageValue(event.target.value);
					}}
					required
				/>
			</div>
			<button type="submit" className="contactForm__button">
				Enviar
			</button>
			{isError ? (
				<Message>Ha ocurrido un error</Message>
			) : isIncorrectCel ? (
				<Message>El número de telefono es incorrecto</Message>
			) : isOk ? (
				<Message>El correo fue enviado con éxito</Message>
			) : (
				<Message>Contactanos!</Message>
			)}
		</form>
	);
};

export default ContactForm;
