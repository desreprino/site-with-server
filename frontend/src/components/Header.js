import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import BurguerMenu from "./BurguerMenu"

const Header = () => {

	const [open, setOpen] = useState(false)

	return (
		<header className="header">
			<div className="header__buttons">
				<Logo />
				<BurguerMenu open={open} setOpen={setOpen} />
			</div>
			<NavBar open={open} />
		</header>
	);
};

export default Header;
