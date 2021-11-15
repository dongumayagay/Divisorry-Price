<script>
	import CatergoryCard from './CatergoryCard.svelte';
	export let categories;
</script>

<main>
	<h1 class="container mx-auto px-10 my-8 text-2xl lg:text-4xl 2xl:text-5xl font-bold">
		Shop by Categories
	</h1>
	<div class="flex overflow-x-scroll  hide-scroll-bar ">
		<div class="flex flex-nowrap px-10 lg:mx-auto space-x-8 ">
			{#each categories as category}
				<CatergoryCard {category} />
			{:else}
				tae
			{/each}
		</div>
	</div>
</main>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
