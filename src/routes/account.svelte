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
	function logout() {
		$session = {};
		goto('/account');
	}
</script>

<header class="container  mx-auto flex justify-between px-6 py-6">
	<span class="uppercase font-semibold text-4xl tracking-widest"> Your Account </span>
	<button on:click={logout} class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
		>logout</button
	>
</header>

{JSON.stringify($session)}
