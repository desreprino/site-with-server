export default {
	name: "motor",
	title: "Motor",
	type: "document",
	fields: [
		{
			name: "nombre",
			title: "Nombre",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "nombre",
				maxLength: 96,
			},
		},
		{
			name: "marca",
			title: "Marca",
			type: "reference",
			to: { type: "marca" },
		},
	],
};
