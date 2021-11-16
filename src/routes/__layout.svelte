<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
