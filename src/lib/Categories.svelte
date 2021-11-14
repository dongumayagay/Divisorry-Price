<script>
	import CatergoryCard from './CatergoryCard.svelte';
</script>

<div class="flex flex-col bg-white m-auto p-auto">
	<h1
		class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
	>
		Example
	</h1>
	<div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
		<div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
			{#each [...Array(5).keys()] as i}
				<CatergoryCard />
			{/each}
		</div>
	</div>
</div>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
