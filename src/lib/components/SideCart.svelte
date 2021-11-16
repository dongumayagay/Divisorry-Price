<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<aside
	transition:fly={{ opacity: 1, x: 500 }}
	class="z-20 fixed inset-y-0 right-0 border-4 border-red-500  w-[500px] max-w-full h-full bg-white overflow-y-auto ml-auto  flex flex-col p-4"
>
	<nav class="flex items-center justify-between border-b-2 pb-4 md:pb-5">
		<h1 class="text-xl md:text-3xl font-light tracking-wide">Shopping Cart</h1>
		<button on:click={() => dispatch('closeCart')}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-9 text-black/50 hover:text-black transition-all duration-50"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg></button
		>
	</nav>
	<div class="bg-blue-500 w-full h-28" />
	<div class="bg-green-500 w-full h-28 mt-auto" />
</aside>

<div
	transition:fade={{ duration: 200 }}
	on:click={() => dispatch('closeCart')}
	class="z-10 fixed inset-0 bg-black/50 backdrop-blur-sm"
/>
