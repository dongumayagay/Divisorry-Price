<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col ">
	<Navbar />
	<main class="bg-neutral-200">
		<slot />
	</main>
	<Footer />
</div>
