export default {
	name: "producto",
	title: "Producto",
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
			name: "categoria",
			title: "Categoría",
			type: "reference",
			to: { type: "categoria" },
		},
		{
			name: "imagen",
			title: "Imagen",
			type: "image",
		},
		{
			name: "marca",
			title: "Marca",
			type: "reference",
			to: { type: "marca" },
		},
		{
			name: "motor",
			title: "Motor",
			type: "reference",
			to: { type: "motor" },
		},
		{
			name: "link",
			title: "Link",
			type: "url",
		},
	],
};
