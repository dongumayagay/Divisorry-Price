<script context="module">
	export const prerender = true;
</script>

<script>
	const links = [
		{
			title: 'Linus Tech Tips Store',
			link: 'https://www.lttstore.com/'
		},
		{ title: 'MKBHD', link: 'https://mkbhd.com/' },
		{
			title: 'MrBeast | Official Store',
			link: 'https://shopmrbeast.com/'
		},
		{
			title: 'PewDiePie // Store',
			link: 'https://represent.com/store/pewdiepie'
		},
		{
			title: 'Peak Design',
			link: 'https://www.peakdesign.com/'
		},
		{
			title: 'Wandrd',
			link: 'https://wandrd-pacific.com/'
		}
	];
</script>

<svelte:head><title>Divisorry Price - About</title></svelte:head>
<article class="container mx-auto p-8">
	<h1 class="text-center text-4xl font-bold">About</h1>
	<p class="py-2 text-lg">
		Ecommerce Project that uses <a
			class="border-b border-black font-medium"
			href="https://kit.svelte.dev/">Sveltekit</a
		>
		for the Front-end and SSR, and
		<a class="border-b border-black font-medium" href="https://tailwindcss.com/">TailwindCSS</a> for
		styling.
	</p>
	<p class="py-2 text-lg">
		Products used in the project is from <a
			class="border-b border-black font-medium"
			href="https://fakestoreapi.com/">FakeStoreAPI</a
		>, I transfer products to my own API for faster response time.
	</p>
	<h1 class="pt-2 text-lg">Design Insipirations</h1>
	<p class="text-lg px-4">
		Since I'm not good at design. here is some sites that i looked up for some design inspirations.
	</p>
	<ul class="px-8">
		{#each links as item}
			<li class="list-disc">
				<a
					target="_blank"
					rel="noreferrer noopener"
					class="font-medium border-b border-black"
					href={item.link}>{item.title}</a
				>
			</li>
		{/each}
	</ul>
	<h1 class="py-4">
		Source Code : <a
			class="font-medium"
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/dongumayagay/Divisorry-Price">Here</a
		>
	</h1>
</article>
