<script context="module">
	import { browser } from '$app/env';
	import { auth, db } from '$lib/firebase';
	import { session } from '$lib/stores';
	import { get } from 'svelte/store';
	import { doc, getDoc, onSnapshot } from 'firebase/firestore';

	export async function load() {
		if (browser) {
			if (!get(session)) return { status: 300, redirect: '/login' };
			const userDetails = await getDoc(doc(db, 'userInfo', auth.currentUser.uid));
			return { props: { userDetails } };
		}
		return {};
	}
</script>

<script>
	import YourOrders from '$lib/components/YourOrders.svelte';
	import UserDetails from '$lib/components/UserDetails.svelte';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { formatErrorCode } from '$lib/utils';

	export let userDetails;

	async function logout() {
		try {
			await signOut(auth);
			goto('/login');
		} catch (error) {
			console.log(error.code);
			alert(formatErrorCode(error.code));
		}
	}

	onSnapshot(doc(db, 'userInfo', auth.currentUser.uid), (doc) => {
		userDetails = doc.data();
	});

	// let orders = [
	// 	{
	// 		itemName: 'Item_name',
	// 		quantity: 69,
	// 		price: 4.2,
	// 		date: new Date().toUTCString()
	// 	}
	// ];
	let orders = [];
</script>

<main class="container mx-auto py-8 px-4 space-y-4">
	<header class="flex justify-between items-center">
		<span class="uppercase font-semibold text-2xl"> Your Account </span>
		<button on:click={logout} class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
			>logout</button
		>
	</header>
	<h1 class="text-xl sm:text-3xl py-4 text-center">
		Kamusta Suking, <span class="capitalize">{userDetails.firstName}!</span>
	</h1>

	<UserDetails {userDetails} />
	<YourOrders {orders} />
</main>
