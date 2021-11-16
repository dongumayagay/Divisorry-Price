<script>
	import Cart from './SideCart.svelte';
	const logo = '/static/logo.webp';
	let showCart = false;
</script>

<nav class="max-w-full py-1 bg-white shadow-lg sticky top-0 z-10">
	<div
		class="container flex justify-between mx-auto px-6 items-center space-x-5 lg:space-x-8 text-black/70"
	>
		<a sveltekit:prefetch href="/" class="pt-2 mr-auto">
			<img
				class="animate-sway origin-top h-14 lg:h-20 transition-all duration-500 ease-in-out"
				src={logo}
				alt="brand logo"
			/>
		</a>
		<a href="/"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 lg:h-9"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg></a
		>
		<button on:click={() => (showCart = true)}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 lg:h-9"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg></button
		>
	</div>
</nav>

{#if showCart}
	<Cart on:closeCart={() => (showCart = false)} />
{/if}
