<script context="module">
	export async function load({ params }) {
		const slug = params.slug;

		const url =
			slug === 'all products'
				? 'https://fakestoreapi.com/products'
				: 'https://fakestoreapi.com/products/category/' + slug;

		const res = await fetch(url);
		const items = await res.json();
		return {
			props: {
				categoryName: slug,
				items
			}
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let categoryName;
	export let items;

	function titleCase(str) {
		var splitStr = str.toLowerCase().split(' ');
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}
</script>

<svelte:head>
	<title>{titleCase(categoryName)} | Divisorry Price</title>
</svelte:head>

<h1 class=" uppercase tracking-wider text-center my-10 text-3xl font-semibold">{categoryName}</h1>

<main class="container mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
	{#each items as item}
		<ProductCard {item} />
	{/each}
</main>
