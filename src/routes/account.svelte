<script context="module">
	import { browser } from '$app/env';
	import { auth } from '$lib/firebase';
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
	import { signOut } from 'firebase/auth';
	import { formatErrorCode } from '$lib/utils';

	$: if (!$session && browser) goto('/login');

	async function logout() {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error.code);
			alert(formatErrorCode(error.code));
		}
	}
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
		<!-- Kamusta Suking, <span class="capitalize">{userDetails.firstName}!</span> -->
		{$session ? $session.email : '. . .'}
	</h1>
	<!-- 
	<UserDetails {userDetails} /> -->
	<YourOrders {orders} />
</main>
