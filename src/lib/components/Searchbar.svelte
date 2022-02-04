<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="fixed inset-x-0 top-0 z-20 flex justify-center">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		type="search"
		transition:fly={{ opacity: 1, y: -100, duration: 200 }}
		autofocus
		placeholder="Search..."
		class=" px-6 py-3 my-8 text-2xl container mx-8 rounded-full shadow-2xl"
	/>
</div>

<div
	transition:fade={{ duration: 200 }}
	on:click={() => dispatch('closeSearchbar')}
	class="z-10 fixed inset-0 bg-black/50 "
/>

<svelte:window
	on:keydown={(event) => {
		if (event.key == 'Escape') {
			dispatch('closeSearchbar');
		}
	}}
/>
