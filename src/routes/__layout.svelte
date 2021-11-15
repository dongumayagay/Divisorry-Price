<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:body class="bg-white h-screen" />
<Navbar />
<slot />
<Footer />
