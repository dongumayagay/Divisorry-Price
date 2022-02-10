<script context="module">
	export async function load({ params, fetch }) {
		const product_id = params.product_id;
		const url = `/api/product/${product_id}`;
		const res = await fetch(url);
		const item = await res.json();
		return {
			props: {
				item
			}
		};
	}
</script>

<script>
	import { showCart, cart } from '$lib/stores';
	import { goto } from '$app/navigation';
	export let item;
	let innerWidth;
	let quantity = 1;

	function openCart() {
		console.log('triggered open cart');
		if (innerWidth < 640) {
			goto('/cart');
		} else {
			$showCart = true;
		}
	}

	function addToCart() {
		const index = $cart.findIndex((cartitem) => cartitem.id === item.id);
		if (index === -1) {
			const cartItem = {
				id: item.id,
				name: item.title,
				price: item.price,
				image: item.image,
				quantity
			};
			$cart = [...$cart, cartItem];
		} else {
			$cart[index].quantity += quantity;
			$cart = $cart;
		}
		quantity = 1;
		openCart();
	}
</script>

<svelte:window bind:innerWidth />

<div class="flex-1 flex flex-col justify-center items-center py-8 px-4">
	<main class="container grid grid-cols-1 md:grid-cols-2">
		<section
			style=" background-image:url({item.image});"
			class="aspect-[2/3]  bg-contain bg-center bg-no-repeat bg-origin-content w-full"
		/>
		<form on:submit|preventDefault={addToCart} class="p-4 space-y-4 flex flex-col">
			<h1 class=" text-4xl font-bold">{item.title}</h1>
			<h2 class=" text-xl font-semibold">₱{(item.price * 50).toFixed(2)}</h2>
			<div class="flex items-center space-x-1 justify-evenly ">
				<span class="font-semibold text-2xl mr-4 text-center"> Quantity </span>
				<span class="flex items-center space-x-1">
					<button
						type="button"
						on:click={() => {
							if (quantity > 1) quantity -= 1;
						}}
						class="aspect-square w-8"
					>
						<img src="/ui/minus.svg" alt="" />
					</button>
					<input
						on:blur={() => {
							if (quantity > 99) quantity = 99;
							else if (quantity < 1) quantity = 1;
						}}
						bind:value={quantity}
						type="number"
						required
						min="1"
						max="99"
						class="rounded-full appearance-none w-16 h-10 border-2 text-right font-bold text-lg"
					/>
					<button
						type="button"
						on:click={() => {
							if (quantity < 99) quantity += 1;
						}}
						class="aspect-square w-8"
					>
						<img src="/ui/plus.svg" alt="" />
					</button>
				</span>
			</div>
			<button
				type="submit"
				class="bg-neutral-800 rounded-full py-2 text-white font-semibold tracking-wide text-xl"
				>Add to Cart</button
			>
			<article>
				<h2 class="font-bold text-xl pb-2">Product Information</h2>
				<p class="pl-4">{item.description}</p>
			</article>
		</form>
	</main>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
</style>
