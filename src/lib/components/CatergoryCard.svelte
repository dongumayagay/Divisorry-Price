<script>
	import { scale } from 'svelte/transition';
	export let category;
	let showLink = false;
</script>

<section
	on:mouseenter={() => (showLink = true)}
	on:mouseleave={() => (showLink = false)}
	style="aspect-ratio: 2/3; background-image:url({category.image});"
	class="w-64 lg:w-80 mb-14 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-400 ease-in-out bg-contain bg-center bg-no-repeat bg-origin-content p-5 flex justify-center items-center "
>
	{#if showLink}
		<a
			href="/"
			transition:scale
			class="bg-black/95 text-white/95 text-lg lg:text-xl py-4 px-8 border border-white/50 hover:bg-gray-800
			transition-all duration-300 ease-in-out capitalize tracking-wider
			">{category.name}</a
		>
	{/if}
</section>
