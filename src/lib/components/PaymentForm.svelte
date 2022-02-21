<script>
	// import { createEventDispatcher } from 'svelte';

	// const dispatch = createEventDispatcher();
	export let value;
</script>

<form on:submit|preventDefault autocomplete="off" class="grid grid-cols-2 gap-x-4 w-full">
	<h1 class="col-span-2 text-center font-bold text-2xl mb-4">Shipping Information</h1>

	<h1 class="font-semibold col-span-2">Card Details</h1>

	<label class="pb-2 col-span-2 sm:col-span-2 ">
		<span class="block text-sm pl-4">Card number</span>
		<input
			required
			name="number"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="Card number"
			value=""
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">Expiration</span>
		<input
			required
			name="expiration"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="Expiration"
			value=""
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">CVC/CVV</span>
		<input
			required
			name="cvc"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="CVC/CVV"
			value=""
		/>
	</label>
	<span>
		<button
			on:click={() => (value = 0)}
			class="w-full items-center  bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white mt-2"
			type="button"
		>
			back
		</button></span
	>

	<span>
		<button
			class="w-full items-center  bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white mt-2"
			type="submit"
		>
			Place Order
		</button>
	</span>
</form>
