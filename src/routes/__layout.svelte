<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import { showCart } from '$lib/stores';
</script>

<div class="pb-[125px] relative min-h-screen h-full flex flex-col bg-neutral-50 ">
	<Navbar />
	<!-- <main class=" flex-1 grid rounded-full bg-green-400 "> -->
	<slot />
	<!-- </main> -->
	<Footer />
</div>
{#if $showCart}
	<Cart />
{/if}
