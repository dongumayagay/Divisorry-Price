<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import logo from '$lib/assets/logo.webp';
</script>

<div class="min-h-screen flex flex-col">
	<Navbar {logo} />
	<main>
		<slot />
	</main>
	<Footer />
</div>
