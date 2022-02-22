<script>
	import { cart, total, userDetails } from '$lib/stores';
	import { browser } from '$app/env';
	import { session } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { getDoc, addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
	import { db } from '$lib/firebase';

	async function submitHandler(event) {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		const orderData = {
			owner: $session.uid,
			dateOrdered: serverTimestamp(),
			status: 'pending',
			totalPrice: $total,
			shippingDetails: data
		};
		const ordersRef = collection(db, 'orders');
		const orderItemsRef = collection(db, 'orderItems');
		try {
			const orderDocRef = await addDoc(ordersRef, orderData);
			await Promise.all(
				$cart.map((element) => {
					return addDoc(orderItemsRef, {
						orderId: orderDocRef.id,
						productId: element.id,
						productName: element.name,
						productPrice: element.price * 50,
						quantity: element.quantity
					});
				})
			);
			$cart = [];
			goto('/about');
		} catch (error) {
			console.log(error);
		}
	}
	async function getUserDetails() {
		console.log('get user details');
		const userInfoDocRef = doc(db, 'userInfo', $session.uid);
		const docSnap = await getDoc(userInfoDocRef);
		if (docSnap.exists()) {
			$userDetails = docSnap.data();
		}
	}

	$: if ($session && browser) getUserDetails();
	$: if (!$session && browser) goto('/login');
	$: if ($cart.length == 0) goto('/');
</script>

{#if $session && $userDetails && $cart.length > 0}
	<div class="flex-1 flex justify-center items-center overflow-x-hidden">
		<main
			class="max-w-full md:w-[640px] flex flex-col bg-white border border-neutral-300/75 shadow-xl w-full py-8 px-6 rounded-xl "
		>
			<form on:submit|preventDefault={submitHandler} class="grid grid-cols-2 gap-x-2 w-full">
				<h1 class="col-span-2 text-center font-bold text-2xl mb-4">Checkout</h1>
				<h1 class="font-semibold col-span-2 my-2 border-b-2 border-black py-1">Shipping Details</h1>
				<label class="pb-2 col-span-2 sm:col-span-1 ">
					<span class="block text-sm pl-4">First name</span>
					<input
						required
						name="firstName"
						class="w-full rounded-full px-4 sm:text-lg"
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
						class="w-full rounded-full px-4 sm:text-lg"
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
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="Street"
						value={$userDetails.address.street}
					/>
				</label>
				<label class="pb-2 col-span-1 ">
					<span class="block text-sm pl-4">City / Municipality</span>
					<input
						required
						name="city"
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="City / Muncipality"
						value={$userDetails.address.city}
					/>
				</label>
				<label class="pb-2 col-span-1 ">
					<span class="block text-sm pl-4">Province</span>
					<input
						required
						name="province"
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="Province"
						value={$userDetails.address.province}
					/>
				</label>
				<span />

				<h1 class="font-semibold col-span-2 my-2 border-b-2 border-black py-1">Card Details</h1>

				<label class="pb-2 col-span-2 sm:col-span-2 ">
					<span class="block text-sm pl-4">Card number</span>
					<input
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="Card number"
						value=""
					/>
				</label>
				<label class="pb-2 col-span-1 ">
					<span class="block text-sm pl-4">Expiration</span>
					<input
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="Expiration"
						value=""
					/>
				</label>
				<label class="pb-2 col-span-1 ">
					<span class="block text-sm pl-4">CVC/CVV</span>
					<input
						class="w-full rounded-full px-4 sm:text-lg"
						type="text"
						placeholder="CVC/CVV"
						value=""
					/>
				</label>
				<p class="text-center col-span-full text-red-500">
					Please don't use real credit card or just leave it blank
				</p>
				<span class="col-span-2 flex justify-center">
					<button
						class=" items-center  bg-neutral-900 rounded-full px-6 py-3 capitalize tracking-widest sm:text-lg font-medium text-white mt-2"
						type="submit"
					>
						Place Order
					</button>
				</span>
			</form>
		</main>
	</div>
{/if}
