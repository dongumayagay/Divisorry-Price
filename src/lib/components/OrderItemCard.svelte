<script>
	import { formatCurrency } from '$lib/utils';
	export let item;
</script>

<div class="grid grid-cols-3 sm:grid-cols-7 gap-x-2 mt-2 items-center">
	<section
		style=" background-image:url({`/product_images/${item.productId}.jpg`});"
		class=" aspect-square border border-black rounded-xl p-1 bg-contain bg-center bg-no-repeat bg-origin-content bg-white col-span-1"
	/>
	<div class=" col-span-2 sm:col-span-6 sm:text-lg flex flex-col">
		<h1 class="col-span-2">{item.productName}</h1>
		<div class="grid grid-cols-2">
			<h1 class="col-span-2 sm:col-span-1">Price: ₱{formatCurrency(item.productPrice)}</h1>
			<h1 class="col-span-2 sm:col-span-1">Quantity: {item.quantity}</h1>
		</div>
	</div>
</div>
