import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
	const history = useHistory();

	const [pathname, setPathname] = useState(history.location.pathname);

	useEffect(() => {
		history.listen((location) => {
			setPathname(location.pathname);
		});
	}, [history]);

	const links = [
		{ path: "/", text: "Home" },
		{ path: "/productos", text: "Productos" },
		{
			href: "https://www.mercadolibre.com.ar",
			text: "Tienda",
			target: "_blank",
		},
		{ path: "/nosotros", text: "Nosotros" },
		{ path: "/contacto", text: "Contacto" },
	];

	return (
		<nav className="navBar">
			<ul className="navBar__list">
				{links.map(({ path, text, href, target }) => {
					return (
						<li key={text} className="navBar__listItem">
							{path && !href ? (
								<NavLink
									exact
									to={path}
									className="navBar__link"
									activeClassName="navBar__link--active"
								>
									{pathname === path ? (
										<h1 className="navBar__text">{text}</h1>
									) : (
										<span className="navBar__text">{text}</span>
									)}
								</NavLink>
							) : (
								<a className="navBar__link" href={href} target={target}>
									{text}
								</a>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
