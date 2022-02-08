<script context="module">
	import { browser } from '$app/env';

	export async function load({ session }) {
		if (browser) {
			if (Object.keys(session).length !== 0) {
				return { status: 300, redirect: '/account' };
			}
		}
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let email = '';
	let password = '';

	console.log($session);

	function login() {
		$session = {
			email,
			password
		};
		goto('/account');
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
				href="/signup"
				class="mx-auto text-center transition pt-4 text-lg text-neutral-600 w-fit border-transparent border-b hover:border-black"
			>
				Don't have an account? Create one
			</a>
		</form>
	</main>
</div>
