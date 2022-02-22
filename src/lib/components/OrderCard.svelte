<script>
	import { formatCurrency } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import { session } from '$lib/stores';
	import { browser } from '$app/env';
	import { db } from '$lib/firebase';
	import { collection, getDocs, query, where } from 'firebase/firestore';
	import OrderItemCard from './OrderItemCard.svelte';

	export let order;
	let collapse = true;
	let orderItems = [];
	async function getOrderItems() {
		const orderItemsRef = collection(db, 'orderItems');
		const q = query(orderItemsRef, where('orderId', '==', order.orderId));
		try {
			const docsSnap = await getDocs(q);
			orderItems = docsSnap.docs.map((element) => element.data());
			console.log(orderItems);
		} catch (error) {
			console.log(error);
		}
	}

	$: if ($session && browser) {
		getOrderItems();
	}
</script>

<div class="relative">
	<div
		on:click={() => (collapse = !collapse)}
		class="flex flex-col justify-between p-4 rounded-t-xl text-neutral-200 bg-neutral-900 mt-4 cursor-pointer"
		class:rounded-b-xl={collapse}
	>
		<span class="flex justify-between items-center">
			<h1>Ordered: {new Date(order.dateOrdered.seconds * 1000).toLocaleString()}</h1>

			{#if collapse}<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			{:else}<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M5 15l7-7 7 7"
					/>
				</svg>{/if}
		</span>

		<span class="flex justify-between">
			<h1>Status: <span class="capitalize">{order.status}</span></h1>
			<h1>Total: ₱{formatCurrency(order.totalPrice)}</h1>
		</span>
	</div>
	{#if !collapse}
		<section
			transition:slide|local
			class="text-white bg-neutral-900 rounded-b-xl px-4 pb-4 relative w-full -top-2"
		>
			<article class="grid grid-cols-2 mb-2 border-y py-2">
				<h1 class="col-span-2">Shipping Details</h1>

				<span class="col-span-2"
					>{`${order.shippingDetails.firstName} ${order.shippingDetails.lastName}`}</span
				>
				<div class="col-span-2">{order.shippingDetails.street},</div>
				<div class="col-span-2">
					{`${order.shippingDetails.city}, ${order.shippingDetails.province}`}
				</div>
			</article>
			<ul>
				{#each orderItems as item}
					<OrderItemCard {item} />
				{/each}
			</ul>
		</section>
	{/if}
</div>
