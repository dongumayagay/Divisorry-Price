<script context="module">
	export const prerender = true;
</script>

<svelte:head><title>Divisorry Price - Contact Us</title></svelte:head>
<div class="flex-1 flex justify-center items-center py-8">
	<main
		class="flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full sm:w-[500px] py-12 px-6 rounded-xl"
	>
		<h1 class="uppercase font-bold tracking-widest text-3xl pb-4 text-center">Contact Us</h1>
		<form class="grid grid-cols-2 gap-x-4 gap-y-1">
			<label class=" col-span-1">
				<span class="inline-block text-sm pl-4"> First Name </span>
				<input
					required
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="First name"
				/>
			</label>
			<label class=" col-span-1">
				<span class="inline-block text-sm pl-4"> Last name </span>
				<input
					required
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Last name"
				/>
			</label>
			<label class=" col-span-2">
				<span class="inline-block text-sm pl-4"> Email </span>
				<input required class="w-full rounded-full px-4 text-lg" type="email" placeholder="Email" />
			</label>
			<label class=" col-span-2 ">
				<span class="block text-sm pl-4"> Message </span>
				<textarea
					class="w-full rounded-2xl px-4 text-lg"
					placeholder="Your message..."
					required
					cols="30"
					rows="8"
				/>
			</label>

			<button
				class=" col-span-2 mt-3 bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white border-2 border-black hover:text-black hover:bg-neutral-400 transition"
				type="submit">Send</button
			>
		</form>
	</main>
</div>
