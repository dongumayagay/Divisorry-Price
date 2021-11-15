<script>
	export let category;
</script>

<section
	class="w-64 lg:w-80 mb-12 rounded-3xl shadow-md border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out relative p-5"
>
	<img style="aspect-ratio: 2/3;" class="" src={category.image} alt="" />
	<div
		href="/"
		class="absolute left-0 top-0 w-full h-full rounded-3xl hover:bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-all duration-300 ease-in-out flex items-center justify-center group"
	>
		<button
			class="hidden group-hover:flex text-white text-xl uppercase tracking-widest font-semibold text-center items-center justify-center w-full h-full rounded-3xl"
		>
			{category.name}
		</button>
	</div>
</section>
