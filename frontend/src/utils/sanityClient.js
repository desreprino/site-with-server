import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "wwzrxktr",
	dataset: "production",
	apiVersion: "2021-10-07",
	useCdn: true,
});
