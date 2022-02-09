<script>
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { showCart, cart } from '$lib/stores';
	import CartItem from './CartItem.svelte';

	function closeCart() {
		$showCart = false;
	}
</script>

<aside
	transition:fly={{ opacity: 1, x: 500 }}
	class="z-20 fixed inset-y-0 right-0 w-[500px] max-w-full h-screen bg-white flex flex-col p-2"
>
	<header class="flex items-center justify-between border-b-2 border-black pb-2 sm:pb-3">
		<h1 class="text-2xl md:text-3xl text-neutral-900 tracking-wide pl-3">Shopping Cart</h1>
		<button on:click={closeCart}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 text-neutral-900 hover:text-red-500 transition duration-50"
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
	</header>

	<main class="flex-1 flex flex-col py-4 overflow-auto mb-20">
		{#if $cart.length != 0}
			{#each $cart as item (item.id)}
				<li animate:flip in:fade out:fly={{ x: 400 }} class=" list-none">
					<CartItem {item} />
				</li>
			{/each}
		{:else}
			<div class="flex-1 text-center flex flex-col justify-center items-center space-y-4">
				<h1 class="font-semibold text-3xl">Your cart is empty</h1>
				<button
					on:click={closeCart}
					class="bg-neutral-900 text-center border-2 border-neutral-900 text-white py-2 px-4 rounded-full"
					>Continue Shopping</button
				>
			</div>
		{/if}
	</main>
	<footer
		class=" border-t-2 border-black z-30 fixed bottom-0 right-0 w-[500px] max-w-full h-20 py-3 px-4 grid grid-cols-3"
	>
		<div class="col-span-2">
			<span class="block text-sm">Total:</span>
			<span class="pl-4 text-xl">₱{(0).toFixed(2)}</span>
		</div>
		<div class="col-span-1 grid place-content-center">
			<button class="bg-neutral-900 text-white py-2 px-4 rounded-full text-lg">Checkout</button>
		</div>
	</footer>
</aside>

<div
	on:click={closeCart}
	transition:fade={{ duration: 200 }}
	class="z-10 fixed inset-0 bg-black/50 "
/>

<svelte:window
	on:keydown={(event) => {
		if (event.key == 'Escape') {
			closeCart();
		}
	}}
/>
