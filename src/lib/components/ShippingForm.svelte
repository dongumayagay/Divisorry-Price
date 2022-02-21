<script>
	// export let email;
	// export let $userDetails;

	import { session, userDetails } from '$lib/stores';
	export let value;

	function submitHandler(event) {
		value = 1;
	}
</script>

<form on:submit|preventDefault={submitHandler} class="grid grid-cols-2 gap-x-4 w-full">
	<h1 class="col-span-2 text-center font-bold text-2xl mb-4">Shipping Information</h1>
	<h1 class="font-semibold col-span-2">Contact Details</h1>
	<label class="pb-2 col-span-2">
		<span class="inline-block text-sm pl-4"> Email </span>
		<input
			name="email"
			class="w-full rounded-full px-4 text-lg bg-neutral-200 cursor-copy"
			type="email"
			placeholder="Email"
			readonly
			value={$session.email}
		/>
	</label>
	<h1 class="font-semibold col-span-2">Shipping Address</h1>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">First name</span>
		<input
			required
			name="firstName"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="First name"
			value={$userDetails.firstName}
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">Last name</span>
		<input
			required
			name="lastName"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="Last name"
			value={$userDetails.lastName}
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-2 ">
		<span class="block text-sm pl-4">Street Address</span>
		<input
			required
			name="street"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="Street"
			value={$userDetails.address.street}
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">City / Municipality</span>
		<input
			required
			name="city"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="City / Muncipality"
			value={$userDetails.address.city}
		/>
	</label>
	<label class="pb-2 col-span-2 sm:col-span-1 ">
		<span class="block text-sm pl-4">Province</span>
		<input
			required
			name="province"
			class="w-full rounded-full px-4 text-lg"
			type="text"
			placeholder="Province"
			value={$userDetails.address.province}
		/>
	</label>
	<span />

	<span>
		<button
			class="w-full items-center  bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white mt-2"
			type="submit"
		>
			Payment
		</button>
	</span>
</form>
