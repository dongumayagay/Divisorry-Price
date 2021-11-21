<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<aside
	transition:fly={{ opacity: 1, x: 640 }}
	class="z-20 fixed inset-y-0 right-0 w-[640px] max-w-full h-full bg-white overflow-y-auto ml-auto flex flex-col p-4"
>
	<nav class="flex items-center justify-between border-b-2 border-black/40 pb-4 md:pb-5">
		<h1 class="text-xl md:text-3xl text-black/70 font-light tracking-wide pl-3">Shopping Cart</h1>
		<button on:click={() => dispatch('closeCart')}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 text-black/50 hover:text-black transition-all duration-50"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg></button
		>
	</nav>
	<main class="flex flex-col justify-center items-center flex-grow">
		<div class="flex flex-col justify-center items-center space-y-6 md:space-y-8">
			<h1 class="text-2xl md:text-4xl font-light">Your cart is empty</h1>
			<button
				on:click={() => dispatch('closeCart')}
				class="text-lg md:text-xl bg-black/95 text-white/95 py-3 px-6 rounded-md"
				>Continue shopping</button
			>
		</div>
		<div class=" h-24" />
	</main>
</aside>

<div
	transition:fade={{ duration: 200 }}
	on:click={() => dispatch('closeCart')}
	class="z-10 fixed inset-0 bg-black/50 "
/>

<svelte:window
	on:keydown={(event) => {
		if (event.key == 'Escape') {
			dispatch('closeCart');
		}
	}}
/>
