<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="bg-white h-screen">
	<Navbar />
	<slot />
</div>
