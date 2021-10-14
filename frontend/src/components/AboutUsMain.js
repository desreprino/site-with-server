import { Link } from "react-router-dom";

import legend from "../assets/images/rino_leyenda.svg";
import usImage from "../assets/images/nosotros.webp";

const AboutUsMain = ({ isHome }) => {
	isHome = isHome === "false" ? false : true;

	return (
		<div className="aboutUsMain">
			<figure className="aboutUsMain__imageContainer">
				<img className="aboutUsMain__image" src={usImage} alt="Nosotros" />
			</figure>
			<div className="aboutUsMain__textContainer">
				<img
					className="aboutUsMain__legend"
					src={legend}
					alt="Rino Repuestos"
				/>
				<div>
					<strong className="aboutUsMain__title">RINO REPUESTOS SRL</strong>
					<p
						className={`aboutUsMain__paragraph aboutUsMain__paragraph--first ${
							isHome ? "aboutUsMain__paragraph--home" : ""
						}`}
					>
						es una empresa joven dedicada a la importación, exportación,
						fabricación y distribución de partes y repuestos de motor de todos
						los modelos y de todas las marcas, tanto de linea liviana,
						<span className="aboutUsMain__paragraphFinal">
							{" "}
							como pesada y agraria.
						</span>
					</p>
				</div>
				{isHome ? (
					<Link to="/nosotros" className="aboutUsMain__link">
						Ver mas...
					</Link>
				) : (
					<>
						<p className="aboutUsMain__paragraph">
							Contamos con amplios conocimientos técnicos, para poder brindarles
							una respuesta concreta a cualquier inquietud, y de ese modo
							<span className="aboutUsMain__paragraphFinal">
								{" "}
								aportar una solución integra.
							</span>
						</p>
						<p className="aboutUsMain__paragraph">
							Permanentemente estamos incorporando nuevos productos a nuestro
							amplio stock de repuestos, somos importadores directos con
							proveedores distribuidos en Japón, Inglaterra, Estados Unidos,
							Brasil,
							<span className="aboutUsMain__paragraphFinal">
								{" "}
								Turquía, India, China y Korea.
							</span>
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default AboutUsMain;
