<script context="module">
	import { browser } from '$app/env';
	import { auth, db } from '$lib/firebase';
	import { session } from '$lib/stores';
	import { get } from 'svelte/store';

	export async function load() {
		if (browser) {
			if (!get(session)) return { status: 300, redirect: '/login' };
		}
		return {};
	}
</script>

<script>
	import YourOrders from '$lib/components/YourOrders.svelte';
	import UserDetails from '$lib/components/UserDetails.svelte';
	import { goto } from '$app/navigation';
	import { formatErrorCode } from '$lib/utils';
	import { signOut } from 'firebase/auth';
	import { doc, onSnapshot } from 'firebase/firestore';

	let userDetails;
	let userInfoDocRef;
	let unsub;

	async function logout() {
		unsub();
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
			alert(formatErrorCode(error.code));
		}
	}

	$: if (!$session && browser) goto('/login');
	$: if ($session) {
		userInfoDocRef = doc(db, 'userInfo', $session.uid);
		unsub = onSnapshot(userInfoDocRef, (doc) => {
			userDetails = doc.data();
		});
	}
</script>

<main class="container mx-auto py-8 px-4 space-y-4">
	<header class="flex justify-between items-center">
		<span class="uppercase font-semibold text-2xl"> Your Account </span>
		<button on:click={logout} class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
			>logout</button
		>
	</header>
	<h1 class="text-xl sm:text-3xl py-4 text-center font-medium">
		Kamusta Suking, <span class="capitalize text-yellow-500">
			{userDetails ? userDetails.firstName + '!' : '. . .'}
		</span>
	</h1>

	<UserDetails {userDetails} {userInfoDocRef} />
	<YourOrders />
</main>
