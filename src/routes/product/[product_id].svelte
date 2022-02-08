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
	// import { cart } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let item;

	let quantity = 1;
	$: if (quantity < 1) quantity = 1;

	function addToCart() {
		const cartItem = {
			id: item.id,
			name: item.title,
			price: item.price,
			quantity
		};
		// cart = [...cart, cartItem];
	}
</script>

<div class="flex-1 flex flex-col justify-center items-center py-8">
	<main class="container grid grid-cols-1 md:grid-cols-2">
		<section
			style=" background-image:url({item.image});"
			class="aspect-[2/3]  bg-contain bg-center bg-no-repeat bg-origin-content w-full"
		/>
		<section class="p-4 space-y-4 flex flex-col">
			<h1 class=" text-4xl font-bold">{item.title}</h1>
			<h2 class=" text-xl font-semibold">₱{(item.price * 50).toFixed(2)}</h2>
			<label class="flex items-center space-x-1">
				<span class="font-semibold text-lg mr-4"> Quantity </span>
				<button on:click={() => (quantity += 1)} class="aspect-square w-8">
					<img src="/ui/minus.svg" alt="" />
				</button>
				<input
					bind:value={quantity}
					type="number"
					class="rounded-full appearance-none w-16 h-10 border-2 text-right font-bold text-lg"
				/>
				<button on:click={() => (quantity += 1)} class="aspect-square w-8">
					<img src="/ui/plus.svg" alt="" />
				</button>
			</label>
			<button
				on:click={addToCart}
				class="bg-neutral-800 rounded-full py-2 text-white font-semibold tracking-wide text-xl ring ring-neutral-800 hover:bg-neutral-500 hover:text-neutral-800 transition"
				>Add to Cart</button
			>
			<article>
				<h2 class="font-bold text-xl pb-2">Product Information</h2>
				<p class="pl-4">{item.description}</p>
			</article>
		</section>
	</main>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
</style>
