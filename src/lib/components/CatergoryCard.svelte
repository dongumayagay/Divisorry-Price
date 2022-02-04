<script>
	export let category;
</script>

<a
	sveltekit:prefetch
	href={`category/${category.name}`}
	style="aspect-ratio: 2/3; background-image:url({category.image});"
	class="w-64 lg:w-80 mt-5 mb-14 rounded-3xl bg-white shadow-lg border hover:shadow-xl hover:scale-105 transition-all duration-400 ease-in-out bg-contain bg-center bg-no-repeat bg-origin-content p-3 flex justify-center items-end"
>
	<span
		class="hover:text-yellow-400 transition duration-700 capitalize text-2xl font-bold tracking-wide mb-4 text-neutral-800"
		>{category.name}</span
	>
</a>
