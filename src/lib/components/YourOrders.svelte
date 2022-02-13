<script>
	let orders = [];
</script>

<section class="">
	<header class="flex items-center h-full justify-between py-1 border-b-2 border-black">
		<h1 class="flex items-end justify-start font-semibold text-lg flex-1 py-2 cursor-pointer">
			Your Orders
		</h1>
	</header>
	<ul class="px-8">
		{#each orders as order}
			<li class="grid grid-cols-4">
				<span class="col-span-1">{order.itemName}</span>
				<span class="col-span-1">{order.quantity}</span>
				<span class="col-span-1">₱{order.price.toFixed(2)}</span>
				<span class="col-span-1">{order.date}</span>
			</li>
		{:else}
			<p class="text-center text-lg">You currently haven't placed any orders yet</p>
		{/each}
	</ul>
</section>
