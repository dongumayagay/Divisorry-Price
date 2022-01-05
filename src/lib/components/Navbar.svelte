<script>
	import Searchbar from './Searchbar.svelte';
	import Cart from './SideCart.svelte';
	const logo = '/logo.webp';
	let showCart = false;
	let showSearchbar = false;
</script>

<nav class="max-w-full py-1 bg-neutral-800 shadow-lg text-neutral-300  sticky top-0 z-10">
	<div
		aria-label="Storefront"
		class="container flex justify-between mx-auto px-6 items-center space-x-5 lg:space-x-8"
	>
		<a href="/" class="pt-2 mr-auto">
			<img
				class="animate-sway origin-top h-14 lg:h-20 transition-all duration-500 ease-in-out"
				src={logo}
				alt="brand logo"
			/>
		</a>
		<button aria-label="search" on:click={() => (showSearchbar = true)}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 lg:h-9 hover:text-yellow-500 transition-colors"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg></button
		>
		<button aria-label="show cart" on:click={() => (showCart = true)}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 lg:h-9 hover:text-yellow-500 transition-colors"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg></button
		>
	</div>
</nav>
{#if showSearchbar}
	<Searchbar on:closeSearchbar={() => (showSearchbar = false)} />
{/if}
{#if showCart}
	<Cart on:closeCart={() => (showCart = false)} />
{/if}
