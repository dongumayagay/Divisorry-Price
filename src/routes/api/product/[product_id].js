import products_json from '$lib/products.json';

const products = Array.from(JSON.parse(JSON.stringify(products_json)));

export async function get({ params }) {
	const product_id = parseInt(params.product_id);
	const product = products.find((item) => item.id === product_id);
	return {
		body: product
	};
}
