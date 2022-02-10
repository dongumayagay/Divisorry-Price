<script>
	import { cart } from '$lib/stores';
	export let item;

	function removeItem(id) {
		console.log('remove ' + id);
		$cart = $cart.filter((value) => value.id !== id);
	}
</script>

<!-- {JSON.stringify(item)} -->

<div
	class="grid grid-cols-2 gap-x-2 border bg-neutral-100 border-black p-2 rounded-xl mb-4 mx-2.5 shadow-lg"
>
	<h1 class="col-span-2 font-semibold">{item.name}</h1>
	<section
		style=" background-image:url({item.image});"
		class=" aspect-square border border-black rounded-xl p-1 bg-contain bg-center bg-no-repeat bg-origin-content bg-white col-span-1"
	/>
	<section class="col-span-1 flex flex-col justify-between aspect-square p-1">
		<h2 class="text-2xl text-neutral-600">₱{(item.price * 50).toFixed(2)}</h2>
		<div class="pb-2">
			<span class="font-medium text-lg text-center"> Quantity </span>
			<form on:submit|preventDefault={() => {}} class="flex items-center justify-center space-x-1">
				<button
					type="button"
					on:click={() => {
						if (item.quantity > 1) item.quantity -= 1;
						else item.quantity = 1;
					}}
					class="aspect-square w-20"
				>
					<img src="/ui/minus.svg" alt="" />
				</button>
				<input
					on:blur={() => {
						if (item.quantity > 99) item.quantity = 99;
						else if (item.quantity < 1) item.quantity = 1;
					}}
					bind:value={item.quantity}
					type="number"
					required
					min="1"
					max="99"
					class="rounded-full appearance-none w-full h-10 border-2 text-right font-bold text-lg"
				/>
				<button
					type="button"
					on:click={() => {
						if (item.quantity < 99) item.quantity += 1;
						else item.quantity = 99;
					}}
					class="aspect-square w-20"
				>
					<img src="/ui/plus.svg" alt="" />
				</button>
				<button type="submit" />
			</form>
		</div>
		<button
			on:click={() => removeItem(item.id)}
			class="font-medium text-white bg-neutral-900  px-4 py-2 rounded-full">Remove</button
		>
	</section>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
</style>
