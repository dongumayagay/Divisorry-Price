<script>
	import { userDetails } from '$lib/stores';
	import { browser } from '$app/env';
	import { session } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import ShippingForm from '$lib/components/ShippingForm.svelte';
	import PaymentForm from '$lib/components/PaymentForm.svelte';

	const form = [ShippingForm, PaymentForm];
	let formToShow = 0;

	$: if (!$session && browser) goto('/login');
	$: console.log(formToShow);
</script>

{#if $session && $userDetails}
	<div class="flex-1 flex justify-center items-center overflow-x-hidden">
		<main
			class="max-w-full md:w-[640px] flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full py-8 px-6 rounded-xl "
		>
			<svelte:component this={form[formToShow]} bind:value={formToShow} />
		</main>
	</div>
{/if}
