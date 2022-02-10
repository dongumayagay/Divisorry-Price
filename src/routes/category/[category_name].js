import products_json from '$lib/products.json';

const all_products = Array.from(JSON.parse(JSON.stringify(products_json)));

export async function get({ params }) {
	const category_name = params.category_name;

	if (category_name === 'all')
		return {
			body: { products: all_products }
		};
	return {
		body: { products: all_products.filter((product) => product.category === category_name) }
	};
}
