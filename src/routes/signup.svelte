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
	let retypepassword = '';

	// let passDontMatch = false;

	function signup() {
		$session = {
			email,
			password
		};
		goto('/account');
	}
</script>

<div class=" bg-transparent px-6 pt-16 pb-20">
	<main
		class="flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full sm:w-[450px] mx-auto py-12 px-6 rounded-xl"
	>
		<h1 class="uppercase font-bold tracking-widest text-3xl pb-4 text-center">
			Create your Account
		</h1>
		<form class="flex flex-col" on:submit|preventDefault={signup}>
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
			<label class="pb-2">
				<span class="inline-block text-sm pl-4"> Password </span>
				<input
					required
					bind:value={password}
					class="w-full rounded-full px-4 text-lg"
					type="password"
					placeholder="Password"
				/>
			</label>
			<label class="">
				<span class="inline-block text-sm pl-4"> Re-type Password </span>
				<input
					required
					bind:value={retypepassword}
					class="w-full rounded-full px-4 text-lg"
					type="password"
					placeholder="Re-type Password"
				/>
			</label>
			<p class="text-sm pt-1 pb-2 px-4 text-red-500">
				&nbsp;
				{#if password !== retypepassword}
					Password don't match!
				{/if}
			</p>
			<button
				class="bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white border-2 border-black hover:text-black hover:bg-neutral-400 transition"
				type="submit"
				>Create my account
			</button>
			<a
				href="/login"
				class="mx-auto text-center transition pt-4 text-lg text-neutral-600 w-fit border-transparent border-b hover:border-black"
			>
				Already have an Account? Login
			</a>
		</form>
	</main>
</div>
