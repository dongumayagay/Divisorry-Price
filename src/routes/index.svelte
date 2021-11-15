<script context="module">
	export async function load({ fetch }) {
		const categories_response = await fetch('https://fakestoreapi.com/products/categories');
		const category_names = await categories_response.json();
		const base_category_url = 'https://fakestoreapi.com/products/category/';
		const category_product_urls = category_names.map(
			(category) => base_category_url + category + '?sort=desc?limit=1'
		);
		const category_img = await Promise.all(
			category_product_urls.map(async (url) => {
				const resp = await fetch(url);
				const result = await resp.json();
				return result[0].image;
			})
		);
		let categories = [];
		for (let i = 0; i < category_names.length; i++) {
			categories.push({ name: category_names[i], image: category_img[i] });
		}
		return {
			props: {
				categories
			}
		};
	}
</script>

<script>
	import Categories from '$lib/Categories.svelte';
	import Header from '$lib/Header.svelte';
	export let categories;
</script>

<svelte:head><title>Divisorry ₱rice</title></svelte:head>
<Header />
<Categories {categories} />
