<script>
	import { db } from '$lib/firebase';
	import { collection, doc, getDocs, query, where } from 'firebase/firestore';
	import { session } from '$lib/stores';
	import { browser } from '$app/env';
	import OrderCard from './OrderCard.svelte';
	import { element } from 'svelte/internal';

	let orders = [];
	let orderId;
	async function getOrders() {
		const ordersRef = collection(db, 'orders');
		const q = query(ordersRef, where('owner', '==', $session.uid));
		try {
			const docsSnap = await getDocs(q);
			// orders = docsSnap.docs.map((element) => element.data());
			docsSnap.forEach((doc) => {
				// orders.push(doc.data());
				orders = [...orders, { ...doc.data(), orderId: doc.id }];
			});
		} catch (error) {
			console.log(error);
		}
	}

	$: if ($session && browser) {
		getOrders();
	}
</script>

<section class="">
	<header class="flex items-center h-full justify-between py-1 border-b-2 border-black">
		<h1 class="flex items-end justify-start font-semibold text-lg flex-1 py-2 cursor-pointer">
			Your Orders
		</h1>
	</header>
	<ul>
		{#each orders as order}
			<OrderCard {order} />
		{:else}
			<p class="text-center text-lg">You currently haven't placed any orders yet</p>
		{/each}
	</ul>
</section>
