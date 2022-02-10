<!-- <script context="module">
	export async function load({ params, fetch }) {
		const category_name = params.category_name;

		// const url =
		// 	category_name === 'all products'
		// 		? '/api/products'
		// 		: 'https://fakestoreapi.com/products/category/' + category_name;

		// const url = `/api/category/${category_name}`;
		// const res = await fetch(url);
		// const items = await res.json();

		return {
			props: {
				category_name,
				items
			}
		};
	}
</script> -->
<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { page } from '$app/stores';
	const category_name = $page.params.category_name;
	export let products;

	function titleCase(str) {
		var splitStr = str.toLowerCase().split(' ');
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}
</script>

<svelte:head>
	<title>{titleCase(category_name)} | Divisorry Price</title>
</svelte:head>

<h1 class=" uppercase tracking-wider text-center mt-10 text-3xl font-semibold">{category_name}</h1>

<main class="container mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</main>
