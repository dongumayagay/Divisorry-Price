<script context="module">
	export const prerender = true;
</script>

<script>
	import Categories from '$lib/components/Categories.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head><title>Divisorry Price</title></svelte:head>

<Header />
<Categories />

<!-- <dialog class=" z-50 fixed w-1/2 h-1/2 top-1/2 -translate-y-1/2 bg-neutral-400" open>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti temporibus quod adipisci
	molestias sit dolorem, ipsa suscipit delectus! Dicta dolor ipsum quod corporis excepturi, quisquam
	adipisci consequuntur ratione beatae.
</dialog> -->
