<script>
	import CatergoryCard from './CatergoryCard.svelte';
	export let categories = [
		{ name: "men's clothing", image: '/static/categories/mens.jpg' },
		{ name: "women's clothing", image: '/static/categories/womens.jpg' },
		{ name: 'jewelry', image: '/static/categories/jewelry.jpg' },
		{ name: 'electronics', image: '/static/categories/electronics.jpg' }
	];
</script>

<h1 class="container mx-auto px-10 my-8 text-2xl lg:text-4xl 2xl:text-5xl font-bold">
	Shop by Categories
</h1>
<div class="flex overflow-x-auto mb-16">
	<div class="flex flex-nowrap px-10 lg:mx-auto space-x-8 ">
		{#each categories as category}
			<CatergoryCard {category} />
		{:else}
			tae
		{/each}
	</div>
</div>
<div class="container mx-auto px-10 my-8 mb-20">
	<a
		href="/"
		class="bg-black/95 text-white/95 text-lg lg:text-xl py-4 px-8 border-white/50 hover:bg-gray-800
	transition-all duration-300 ease-in-out capitalize tracking-wider">Shop All Products</a
	>
</div>

<style>
	::-webkit-scrollbar {
		height: 0.75rem;
	}
	::-webkit-scrollbar-track {
		background-color: rgb(243, 244, 246);
		margin: 0 5rem 0 5rem;
		border-radius: 0.75rem;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 1vh;
		background-color: rgb(156, 163, 175);
	}
	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:active {
		background-color: rgb(17, 24, 39);
	}
</style>
