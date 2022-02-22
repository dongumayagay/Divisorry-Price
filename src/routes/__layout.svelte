<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import { session, showCart } from '$lib/stores';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase';

	onAuthStateChanged(auth, (user) => {
		$session = user;
		console.log('session updated');
	});
</script>

<svelte:head>
	<title>Divisorry Price</title>
</svelte:head>
<div class="pb-[125px] relative min-h-screen h-full flex flex-col bg-neutral-50 ">
	<Navbar />
	<slot />
	<Footer />
</div>
{#if $showCart}
	<Cart />
{/if}
