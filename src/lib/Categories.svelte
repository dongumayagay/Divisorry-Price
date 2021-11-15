<script>
	import CatergoryCard from './CatergoryCard.svelte';
</script>

<h1 class="container mx-auto px-10 my-8 text-2xl font-semibold">Shop by Categories</h1>
<section class="flex overflow-x-scroll  hide-scroll-bar ">
	<div class="flex flex-nowrap px-10 lg:mx-auto space-x-8 ">
		{#each [...Array(4).keys()] as i}
			<CatergoryCard />
		{/each}
	</div>
</section>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
