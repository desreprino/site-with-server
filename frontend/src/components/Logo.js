import { Link } from "react-router-dom";

import logo from "../assets/images/rino_logo.svg";

const Logo = () => {
	return (
		<Link className="logo" to="/">
			<figure className="logo">
				<img className="logo__image" src={logo} alt="Repuestos Rino" />
			</figure>
		</Link>
	);
};

export default Logo;
