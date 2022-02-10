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
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

	let firstName = '';
	let lastName = '';
	let street = '';
	let city = '';
	let province = '';

	let email = '';
	let password = '';

	async function signup() {
		try {
			$session = await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: firstName });
			goto('/account');
		} catch (error) {
			alert(error.mesage);
			console.log(error);
		}
	}
</script>

<div class="flex-1 flex justify-center items-center">
	<main
		class="flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full sm:w-[450px] py-12 px-6 rounded-xl"
	>
		<h1 class="uppercase font-bold tracking-widest text-3xl pb-4 text-center">
			Create your Account
		</h1>
		<form class="grid grid-cols-2 gap-x-2" on:submit|preventDefault={signup}>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> First Name </span>
				<input
					required
					bind:value={firstName}
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="First name"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> Last name </span>
				<input
					required
					bind:value={lastName}
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Last name"
				/>
			</label>
			<label class="pb-2 col-span-2">
				<span class="inline-block text-sm pl-4"> Street Address</span>
				<input
					required
					bind:value={street}
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Street Address"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> City / Municipality </span>
				<input
					required
					bind:value={city}
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="City or Municipality"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4">Province </span>
				<input
					required
					bind:value={province}
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Province"
				/>
			</label>
			<label class="pb-2 col-span-2">
				<span class="inline-block text-sm pl-4"> Email </span>
				<input
					required
					bind:value={email}
					class="w-full rounded-full px-4 text-lg"
					type="email"
					placeholder="Email"
				/>
			</label>
			<label class="pb-6 col-span-2">
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
				class="col-span-2 bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white border-2 border-black hover:text-black hover:bg-neutral-400 transition"
				type="submit"
				>Create my account
			</button>
			<a
				sveltekit:prefetch
				href="/login"
				class="col-span-2 mx-auto text-center transition pt-4 text-lg text-neutral-600 w-fit border-transparent border-b hover:border-black"
			>
				Already have an Account? Login
			</a>
		</form>
	</main>
</div>
