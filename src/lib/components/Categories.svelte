<script>
	import CatergoryCard from './CatergoryCard.svelte';
	export let categories = [
		{ name: "men's clothing", image: '/product_images/3.jpg' },
		{ name: "women's clothing", image: '/product_images/20.jpg' },
		{ name: 'jewelery', image: '/product_images/6.jpg' },
		{ name: 'electronics', image: '/product_images/10.jpg' }
	];
</script>

<div class="flex overflow-x-auto my-8 ">
	<div class="flex flex-nowrap px-10 lg:mx-auto space-x-8 snap-x">
		{#each categories as category}
			<CatergoryCard {category} />
		{:else}
			tae
		{/each}
	</div>
</div>
<div class="container text-center mx-auto px-10 mt-2 mb-10">
	<a
		href="category/all"
		class="bg-neutral-900 text-neutral-200 text-lg lg:text-xl py-4 px-6 rounded-full hover:bg-neutral-800 hover:text-yellow-500 active:translate-y-1 transition-colors duration-300 ease-in-out tracking-wider capitalize font-semibold"
		>Shop All Products</a
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
