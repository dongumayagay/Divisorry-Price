<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import { session, showCart, userDetails } from '$lib/stores';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth, db } from '$lib/firebase';
	import { browser } from '$app/env';
	import { doc, onSnapshot } from 'firebase/firestore';

	onAuthStateChanged(auth, (user) => {
		$session = user;
		console.log('session updated');
	});
	$: if ($session && browser) {
		const userInfoDocRef = doc(db, 'userInfo', $session.uid);
		onSnapshot(userInfoDocRef, (doc) => {
			$userDetails = doc.data();
			// console.log(doc.data());
		});
	}
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
