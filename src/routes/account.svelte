<script context="module">
	import { browser } from '$app/env';

	export async function load({ session }) {
		if (browser) {
			if (Object.keys(session).length === 0) {
				return { status: 300, redirect: '/login' };
			}
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import YourOrders from '$lib/components/YourOrders.svelte';
	import UserDetails from '$lib/components/UserDetails.svelte';
	function logout() {
		$session = {};
		goto('/account');
	}

	let userDetails = {
		firstName: 'placeholder_firstName',
		lastName: 'placeholder_lastName',
		street: 'placeholder_street',
		city: 'placeholder_city',
		province: 'placeholder_province'
	};

	let orders = [
		{
			itemName: 'Item_name',
			quantity: 69,
			price: 4.2,
			date: new Date().toUTCString()
		}
	];
	// orders = [];
</script>

<main class="container mx-auto py-8 px-4 space-y-4">
	<header class="flex justify-between items-center">
		<span class="uppercase font-semibold text-2xl"> Your Account </span>
		<button on:click={logout} class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
			>logout</button
		>
	</header>
	<h1 class="text-xl sm:text-3xl py-4 text-center">
		Kamusta suki, <span class="capitalize">{userDetails.firstName}!</span>
	</h1>

	<UserDetails {userDetails} />
	<YourOrders {orders} />
</main>
