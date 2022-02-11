<script context="module">
	import { browser } from '$app/env';
	import { auth } from '$lib/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { session } from '$lib/stores';

	export async function load() {
		if (browser) onAuthStateChanged(auth, (user) => session.set(user));
		return {};
	}
</script>

<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import { showCart } from '$lib/stores';
	// import { navigating } from '$app/stores';
</script>

<div class="pb-[125px] relative min-h-screen h-full flex flex-col bg-neutral-50 ">
	<Navbar />
	<slot />
	<Footer />
</div>
{#if $showCart}
	<Cart />
{/if}
<!-- {#if $navigating}
	<div class="fixed inset-0 h-screen z-50 bg-black/50">
	</div>
{/if} -->
