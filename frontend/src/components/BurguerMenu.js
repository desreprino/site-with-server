import menuImg from "../assets/icons/burguer_menu.png"

const BurguerMenu = ({open, setOpen}) => {

	
	const searchClickHandler = () => {
		setOpen(!open)
	}

	return (
		<div className="burguerMenu">
			<img
				src={menuImg}
				alt="menu"
				className="burguerMenu__img"
				onClick={searchClickHandler}
			/>
		</div>
	);
};

export default BurguerMenu;