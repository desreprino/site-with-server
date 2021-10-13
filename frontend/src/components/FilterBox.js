import { useEffect } from "react";

import sanityClient from "../utils/sanityClient";

import FilterSelect from "./FilterSelect";
import FilterSearchFragment from "./FilterSearchFragment";

import { useProductContext } from "../contexts/ProductContext";

const FilterBox = () => {
	const {
		categories,
		setCategories,
		brands,
		setBrands,
		engines,
		setEngines,
		categoryOptionState,
		setCategoryOptionState,
		brandOptionState,
		setBrandOptionState,
		engineOptionState,
		setEngineOptionState,
		setSearchValueState,
	} = useProductContext();

	useEffect(() => {
		const categoriesQuery = '*[_type == "categoria"]';
		const brandsQuery = '*[_type == "marca"]';
		const enginesQuery = `*[_type == "motor"${
			brandOptionState &&
			` && marca._ref in *[_type=="marca" && nombre=="${brandOptionState}"]._id`
		}]`;

		const getCategories = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const categories = await data?.map((category) => {
					return {
						name: category.nombre,
						slug: category.slug,
					};
				});

				setCategories(categories);
			} catch (error) {
				setCategories([]);
				console.log(error);
			}
		};

		const getBrands = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const brands = await data?.map((brand) => {
					return {
						name: brand.nombre,
						slug: brand.slug,
					};
				});

				setBrands(brands);
			} catch (error) {
				setBrands([]);
				console.log(error);
			}
		};

		const getEngines = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const engines = await data?.map((engine) => {
					return {
						name: engine.nombre,
						slug: engine.slug,
					};
				});

				setEngines(engines);
			} catch (error) {
				setEngines([]);
				console.log(error);
			}
		};

		getCategories(categoriesQuery);
		getBrands(brandsQuery);
		getEngines(enginesQuery);
	}, [brandOptionState, setBrands, setCategories, setEngines]);

	return (
		<div className="filterBox">
			<h2 className="filterBox__title">Filtros</h2>
			<div className="filterBox__selectContainer">
				<FilterSelect
					name="Tipo de producto"
					state={categoryOptionState}
					stateSetter={setCategoryOptionState}
					list={categories}
				/>
				<FilterSelect
					name="Auto (marca)"
					state={brandOptionState}
					stateSetter={setBrandOptionState}
					list={brands}
				/>
				<FilterSelect
					name="Motor"
					state={engineOptionState}
					stateSetter={setEngineOptionState}
					list={engines}
					inactive={engines?.length > 0 ? "false" : "true"}
				/>
			</div>
			<FilterSearchFragment stateSetter={setSearchValueState} />
		</div>
	);
};

export default FilterBox;
