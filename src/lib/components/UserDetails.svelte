<script>
	import { doc, updateDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { slide, scale } from 'svelte/transition';
	import { session } from '$lib/stores';
	import { formatErrorCode } from '$lib/utils';

	export let userDetails;

	let readonly = true;
	let collapse = true;

	async function saveUserDetails() {
		console.log('trying to save');
		try {
			console.log(userDetails);
			await updateDoc(doc(db, 'userInfo', $session.uid), userDetails);
			readonly != readonly;
		} catch (error) {
			console.log(error);
			alert(formatErrorCode(error.code));
		}
	}
</script>

<section class="space-y-2">
	<header class="flex items-center h-full justify-between py-1 border-b-2 border-black">
		<h1
			on:click={() => (collapse = !collapse)}
			class="flex items-end justify-start font-semibold text-lg flex-1 py-2 cursor-pointer"
		>
			<img
				class=" inline mr-1 h-6 aspect-square"
				src={collapse ? '/ui/chevron-down.svg' : '/ui/chevron-up.svg'}
				alt=""
			/>
			Your Information Details
		</h1>
		{#if !collapse}
			<div transition:scale|local>
				{#if !readonly}
					<button
						on:click={saveUserDetails}
						class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
					>
						Save
					</button>
				{:else}
					<button
						on:click={() => (readonly = !readonly)}
						class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
					>
						Edit
					</button>
				{/if}
			</div>
		{/if}
	</header>
	{#if !collapse}
		<form
			transition:slide|local
			class="grid grid-cols-2 gap-x-2 border-2 border-black p-2 rounded-xl list-none"
		>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">First name</span>
				<input
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={!readonly}
					{readonly}
					bind:value={userDetails.firstName}
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Last name</span>
				<input
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={!readonly}
					{readonly}
					bind:value={userDetails.lastName}
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-2 ">
				<span class="block text-sm pl-4">Street Address</span>
				<input
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={!readonly}
					{readonly}
					bind:value={userDetails.street}
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">City / Municipality</span>
				<input
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={!readonly}
					{readonly}
					bind:value={userDetails.city}
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Province</span>
				<input
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={!readonly}
					{readonly}
					bind:value={userDetails.province}
				/>
			</label>
		</form>
	{/if}
</section>
