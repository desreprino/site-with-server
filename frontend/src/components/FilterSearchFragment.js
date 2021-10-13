import { useState } from "react";

const FilterSearchFragment = ({ stateSetter }) => {
	const [searchInputValue, setSearchInputValue] = useState("");

	const searchClickHandler = () => {
		stateSetter(searchInputValue);
	};

	const inputKeyPressHandler = (event) => {
		event.charCode === 13 && stateSetter(searchInputValue);
	};

	return (
		<div className="filterSearchFragment">
			<input
				type="text"
				className="filterSearchFragment__inputText"
				value={searchInputValue}
				onChange={(event) => setSearchInputValue(event.target.value)}
				onKeyPress={inputKeyPressHandler}
			/>
			<button
				className="filterSearchFragment__searchButton"
				onClick={searchClickHandler}
			>
				Buscar
			</button>
		</div>
	);
};

export default FilterSearchFragment;
