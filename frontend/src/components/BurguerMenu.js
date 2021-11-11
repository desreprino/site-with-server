import { useMenuContext } from "../contexts/MenuContext.js";

import menuImg from "../assets/icons/burguer_menu.png";

const BurguerMenu = () => {
	const { open, setOpen, setNavBarClassActive } = useMenuContext();

	const menuClickHandler = () => {
		if (open) {
			setNavBarClassActive(" navBar--closing");
			setTimeout(() => {
				setNavBarClassActive(" navBar--final");
			}, 500);
			setOpen(!open);
		} else {
			setNavBarClassActive("");
			setTimeout(() => {
				setNavBarClassActive(" navBar--open");
			}, 100);
			setOpen(!open);
		}
	};

	return (
		<div className="burguerMenu">
			<img
				src={menuImg}
				alt="menu"
				className="burguerMenu__img"
				onClick={menuClickHandler}
			/>
		</div>
	);
};

export default BurguerMenu;
