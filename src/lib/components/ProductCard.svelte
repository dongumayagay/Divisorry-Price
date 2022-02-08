<script>
	export let item;
</script>

<div class="mx-auto">
	<a
		sveltekit:prefetch
		href={`/product/${item.id}`}
		style="background-image:url({item.image});"
		class="aspect-[2/3] w-[300px] mb-10 rounded-3xl bg-white shadow-lg border border-neutral-300/75 hover:shadow-2xl hover:scale-105 transition-all duration-400 ease-in-out bg-contain bg-center bg-no-repeat bg-origin-content p-2 flex justify-center items-end"
	>
		<section class=" bg-neutral-900/70 py-1 px-2 rounded-xl w-full">
			<h1 class="text-white font-semibold">{item.title}</h1>
			<h3 class=" text-right font-medium text-neutral-300">₱{(item.price * 50).toFixed(2)}</h3>
		</section>
	</a>
</div>
