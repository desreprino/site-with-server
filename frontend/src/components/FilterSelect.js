const FilterSelect = ({ name, state, stateSetter, list, inactive }) => {
	return (
		<select
			className="filterBox__select"
			value={state}
			disabled={inactive && inactive !== "false" ? true : false}
			onChange={(event) => {
				stateSetter(event.target.value);
			}}
		>
			<option className="filterBox__option" value="">
				{name}
			</option>
			{list.map((category, index) => {
				return (
					<option
						className="filterBox__option"
						value={category.name}
						key={index}
					>
						{category.name}
					</option>
				);
			})}
		</select>
	);
};

export default FilterSelect;
