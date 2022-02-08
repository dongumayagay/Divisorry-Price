import products_json from '$lib/products.json';

const products = Array.from(JSON.parse(JSON.stringify(products_json)));

export async function get({ params }) {
	const category_name = params.category_name;

	if (category_name === 'all')
		return {
			body: products
		};

	const filtered_products_by_category = products.filter(
		(product) => product.category === category_name
	);
	return {
		body: filtered_products_by_category
	};
}
