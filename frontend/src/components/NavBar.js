import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { useMenuContext } from "../contexts/MenuContext";

const NavBar = () => {
	const history = useHistory();

	const { navBarClassActive, setNavBarClassActive, setOpen, open } =
		useMenuContext();

	const [pathname, setPathname] = useState(history.location.pathname);

	const navBarClickHandler = () => {
		setNavBarClassActive(" navBar--closing");
		setTimeout(() => {
			setNavBarClassActive(" navBar--final");
		}, 500);
		setOpen(!open);
	};

	useEffect(() => {
		history.listen((location) => {
			setPathname(location.pathname);
		});
	}, [history]);

	const links = [
		{ path: "/", text: "Home" },
		{ path: "/productos", text: "Productos" },
		{
			href: "https://listado.mercadolibre.com.ar/_CustId_797328095?item_id=MLA934814906&category_id=MLA373298&seller_id=797328095&client=recoview-selleritems&recos_listing=true&fbclid=IwAR3P3Fk9Jgw_s2kEb_zwLVcbUy2HuT-pcoOWXpfLfehEh-9x56rcUmRxFy8",
			text: "Tienda",
			target: "_blank",
		},
		{ path: "/nosotros", text: "Nosotros" },
		{ path: "/contacto", text: "Contacto" },
	];

	return (
		<nav className={`navBar ${navBarClassActive}`}>
			<ul className="navBar__list">
				{links.map(({ path, text, href, target }) => {
					return (
						<li key={text} className="navBar__listItem">
							{path && !href ? (
								<NavLink
									onClick={navBarClickHandler}
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
									<span className="navBar__text">{text}</span>
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
