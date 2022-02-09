<script>
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { showCart, cart } from '$lib/stores';
	import CartItem from './CartItem.svelte';
	let innerWidth;
	function closeCart() {
		if (innerWidth < 640) {
			history.go(-1);
		} else {
			$showCart = false;
		}
	}
</script>

<div on:click|self={closeCart} transition:fade={{ duration: 200 }} class="z-10 fixed inset-0  ">
	<aside
		transition:fly={{ opacity: 1, x: 500 }}
		class="flex flex-col outline-8 bg-white h-full max-w-full w-[500px] ml-auto z-20"
	>
		<header class="flex items-center justify-between border-b-2 border-black p-3">
			<h1 class="text-2xl md:text-3xl text-neutral-900 tracking-wide pl-3">Shopping Cart</h1>
			<button on:click|stopPropagation|once={closeCart}
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

		<main class="flex-1 flex flex-col py-4 overflow-auto border-4 ">
			{#if $cart.length != 0}
				{#each $cart as item (item.id)}
					<li animate:flip in:fade out:fly={{ x: 400 }} class=" list-none">
						<CartItem {item} />
					</li>
				{/each}
				<button
					on:click|once|stopPropagation|capture={closeCart}
					class="bg-neutral-900 text-center border-2 border-neutral-900 text-white py-2 px-4 mx-2 rounded-full"
					>Continue Shopping</button
				>
			{:else}
				<div
					in:fade={{ delay: 400 }}
					class="flex-1 text-center flex flex-col justify-center items-center space-y-4"
				>
					<h1 class="font-semibold text-3xl">Your cart is empty</h1>
					<button
						on:click|once|stopPropagation|capture={closeCart}
						class="bg-neutral-900 text-center border-2 border-neutral-900 text-white py-2 px-4 rounded-full"
						>Continue Shopping</button
					>
				</div>
			{/if}
		</main>
		<footer
			class=" border-t-2 border-black z-30  bottom-0 w-[500px] max-w-full bg-white py-3 px-4 grid grid-cols-3"
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
</div>

<svelte:window
	bind:innerWidth
	on:keydown={(event) => {
		if (event.key == 'Escape') {
			closeCart();
		}
	}}
/>
