<script>
	export let category;
</script>

<a
	sveltekit:prefetch
	href={`category/${category.name}`}
	style=" background-image:url({category.image});"
	class="aspect-[2/3] w-[300px] mb-10 rounded-3xl bg-white shadow-lg border border-neutral-300/75 hover:shadow-2xl hover:scale-105 transition-all duration-400 ease-in-out bg-contain bg-center bg-no-repeat bg-origin-content p-2 flex justify-center items-end snap-center"
>
	<span
		class="hover:text-yellow-400 transition duration-700 capitalize text-2xl font-bold tracking-wide mb-1 text-neutral-800"
		>{category.name}</span
	>
</a>
