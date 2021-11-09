import NavBar from "./NavBar";
import Logo from "./Logo";
import BurguerMenu from "./BurguerMenu";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<BurguerMenu />
			<NavBar />
		</header>
	);
};

export default Header;
