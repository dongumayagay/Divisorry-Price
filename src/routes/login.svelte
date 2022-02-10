<script context="module">
	import { browser } from '$app/env';
	import { auth } from '$lib/firebase';
	import { session } from '$lib/stores';
	import { get } from 'svelte/store';
	export async function load() {
		if (browser) {
			if (get(session)) return { status: 300, redirect: '/account' };
		}
		return {};
	}
</script>

<script>
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	async function login() {
		try {
			$session = await signInWithEmailAndPassword(auth, email, password);
			goto('/account');
		} catch (error) {
			console.log(error.code);
			if ((error.code = 'auth/user-not-found'))
				alert("Error : Account doesn't exist, try to Create one.");
		}
	}
</script>

<div class="flex-1 flex justify-center items-center">
	<main
		class="flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full sm:w-[450px] py-12 px-6 rounded-xl"
	>
		<h1 class="uppercase font-bold tracking-widest text-3xl pb-4 text-center">
			Login into your Account
		</h1>
		<form class="flex flex-col" on:submit|preventDefault={login}>
			<label class="pb-2">
				<span class="inline-block text-sm pl-4"> Email </span>
				<input
					required
					bind:value={email}
					class="w-full rounded-full px-4 text-lg"
					type="email"
					placeholder="Email"
				/>
			</label>
			<label class="pb-6">
				<span class="inline-block text-sm pl-4"> Password </span>
				<input
					required
					bind:value={password}
					class="w-full rounded-full px-4 text-lg"
					type="password"
					placeholder="Password"
				/>
			</label>
			<button
				class="bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white border-2 border-black hover:text-black hover:bg-neutral-400 transition"
				type="submit">login</button
			>
			<a
				sveltekit:prefetch
				href="/signup"
				class="mx-auto text-center transition pt-4 text-lg text-neutral-600 w-fit border-transparent border-b hover:border-black"
			>
				Don't have an account? Create one
			</a>
		</form>
	</main>
</div>
