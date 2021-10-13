export default {
	name: "carousel",
	title: "Carousel",
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
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "imagen",
			title: "Imagen",
			type: "image",
		},
		{
			name: "orden",
			title: "Orden",
			type: "number",
		},
	],
};
