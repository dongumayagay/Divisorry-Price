<script>
	//
</script>

<div class="flex-1 flex justify-center items-center">
	<main
		class="container flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full py-12 px-6 rounded-xl "
	>
		<h1 class="text-center font-bold text-2xl mb-4">Shipping Information</h1>
		<form class="grid grid-cols-2 gap-x-4 w-full">
			<h1 class="font-semibold col-span-2">Contact Details</h1>
			<label class="pb-2 col-span-2">
				<span class="inline-block text-sm pl-4"> Email </span>
				<input
					required
					name="email"
					class="w-full rounded-full px-4 text-lg bg-neutral-200 cursor-copy"
					type="email"
					placeholder="Email"
					readonly
				/>
			</label>
			<h1 class="font-semibold col-span-2">Shipping Address</h1>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">First name</span>
				<input
					required
					name=""
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder=""
					value=""
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Last name</span>
				<input
					required
					name=""
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder=""
					value=""
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-2 ">
				<span class="block text-sm pl-4">Street Address</span>
				<input
					required
					name=""
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder=""
					value=""
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">City / Municipality</span>
				<input
					required
					name=""
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder=""
					value=""
				/>
			</label>
			<label class="pb-2 col-span-2 sm:col-span-1 ">
				<span class="block text-sm pl-4">Province</span>
				<input
					required
					name=""
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder=""
					value=""
				/>
			</label>
		</form>
	</main>
</div>
