<script context="module">
	export async function load({ params }) {
		const url = 'https://fakestoreapi.com/products/category/';
		const slug = params.slug;
		const res = await fetch(url + slug);
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
</script>

<h1 class=" capitalize">{categoryName}</h1>

<!-- {JSON.stringify(items)} -->
<!-- <pre>{JSON.stringify(items, null, 2)}</pre> -->

<main class="container mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
	{#each items as item}
		<ProductCard {item} />
	{/each}
</main>
