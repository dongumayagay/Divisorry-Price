<script>
	export let userDetails;
	import { slide, scale } from 'svelte/transition';
	let editable = false;
	let collapse = true;
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
			<button
				transition:scale|local
				on:click={() => (editable = !editable)}
				class="capitalize bg-neutral-800 text-white px-4 py-2 rounded-full"
			>
				{editable ? 'Save' : 'Edit'}
			</button>
		{/if}
	</header>
	{#if !collapse}
		<ul
			transition:slide|local
			class="grid grid-cols-2 gap-x-2 border-2 border-black p-2 rounded-xl"
		>
			<li class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">First name</span>
				<span
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={editable}
					contenteditable={editable}
				>
					{userDetails.firstName}
				</span>
			</li>
			<li class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Last name</span>
				<span
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={editable}
					contenteditable={editable}
				>
					{userDetails.lastName}
				</span>
			</li>
			<li class="pb-2 col-span-2 sm:col-span-2 ">
				<span class="block text-sm pl-4">Street Address</span>
				<span
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={editable}
					contenteditable={editable}
				>
					{userDetails.street}
				</span>
			</li>
			<li class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">City / Municipality</span>
				<span
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={editable}
					contenteditable={editable}
				>
					{userDetails.firstName}
				</span>
			</li>
			<li class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Province</span>
				<span
					class="block w-full rounded-full px-4 py-2 text-lg border overflow-auto"
					class:border-black={editable}
					contenteditable={editable}
				>
					{userDetails.lastName}
				</span>
			</li>
		</ul>
	{/if}
</section>
