<script>
	import { formatCurrency } from '$lib/utils';
	export let item;
</script>

<div
	class="p grid grid-cols-2 gap-x-2 border bg-neutral-100 border-black p-2 rounded-xl mb-4 mx-2.5 shadow-lg"
>
	<h1 class="col-span-2 font-semibold">{item.name}</h1>
	<section
		style=" background-image:url({item.image});"
		class=" aspect-square border border-black rounded-xl p-1 bg-contain bg-center bg-no-repeat bg-origin-content bg-white col-span-1"
	/>
	<section class="col-span-1 flex flex-col justify-between aspect-square p-1">
		<h2 class="text-2xl text-neutral-600">₱{formatCurrency(item.price * 50)}</h2>
		<div class="pb-2">
			<span class="font-medium text-lg text-center"> Quantity </span>
			<form on:submit|preventDefault={() => {}} class="flex items-center justify-center space-x-1">
				<button type="button" class="aspect-square w-20">
					<img src="/ui/minus.svg" alt="" />
				</button>
				<input
					bind:value={item.quantity}
					type="number"
					required
					min="1"
					max="99"
					class="rounded-full appearance-none w-full h-10 border-2 text-right font-bold text-lg"
				/>
				<button type="button" class="aspect-square w-20">
					<img src="/ui/plus.svg" alt="" />
				</button>
				<button type="submit" />
			</form>
		</div>
	</section>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
</style>
