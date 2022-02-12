<script context="module">
	import { browser } from '$app/env';
	import { auth, db } from '$lib/firebase';
	import { session } from '$lib/stores';
	import { get } from 'svelte/store';
	export async function load() {
		if (browser) {
			if (get(session)) return { status: 300, redirect: '/account' };
		}
		return {};
	}
</script>

<script>
	import { navigating } from '$app/stores';
	import { formatErrorCode } from '$lib/utils';
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';

	async function submitHandler(event) {
		const form = event.target;
		const formData = new FormData(form);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		try {
			$session = await createUserWithEmailAndPassword(auth, data.email, data.password);
			delete data.email;
			delete data.password;
			await setDoc(doc(db, 'userInfo', auth.currentUser.uid), data);
			form.reset();
			goto('/account');
		} catch (error) {
			console.log(error);
			alert(formatErrorCode(error.code));
		}
	}
</script>

<div class="flex-1 flex justify-center items-center">
	<main
		class="flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full sm:w-[450px] py-12 px-6 rounded-xl"
	>
		<h1 class="uppercase font-bold tracking-widest text-3xl pb-4 text-center">
			Create your Account
		</h1>
		<form class="grid grid-cols-2 gap-x-2" on:submit|preventDefault={submitHandler}>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> First Name </span>
				<input
					required
					name="firstName"
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="First name"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> Last name </span>
				<input
					required
					name="lastName"
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Last name"
				/>
			</label>
			<label class="pb-2 col-span-2">
				<span class="inline-block text-sm pl-4"> Street Address</span>
				<input
					required
					name="street"
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Street Address"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4"> City / Municipality </span>
				<input
					required
					name="city"
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="City or Municipality"
				/>
			</label>
			<label class="pb-2 col-span-1">
				<span class="inline-block text-sm pl-4">Province </span>
				<input
					required
					name="province"
					class="w-full rounded-full px-4 text-lg"
					type="text"
					placeholder="Province"
				/>
			</label>
			<label class="pb-2 col-span-2">
				<span class="inline-block text-sm pl-4"> Email </span>
				<input
					required
					name="email"
					class="w-full rounded-full px-4 text-lg"
					type="email"
					placeholder="Email"
				/>
			</label>
			<label class="pb-6 col-span-2">
				<span class="inline-block text-sm pl-4"> Password </span>
				<input
					required
					name="password"
					class="w-full rounded-full px-4 text-lg"
					type="password"
					placeholder="Password"
				/>
			</label>

			<button
				class="col-span-2 grid grid-cols-3 items-center  bg-neutral-900 rounded-full px-4 py-3 capitalize tracking-widest text-lg font-medium text-white "
				type="submit"
			>
				<span class="col-span-1" />
				<span class="col-span-1 "> Register </span>
				<span class="col-span-1 flex justify-center">
					{#if $navigating}
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							/>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					{/if}
				</span>
			</button>
			<a
				sveltekit:prefetch
				href="/login"
				class="col-span-2 mx-auto text-center transition pt-4 text-lg text-neutral-600 w-fit border-transparent border-b hover:border-black"
			>
				Already have an Account? Login
			</a>
		</form>
	</main>
</div>
