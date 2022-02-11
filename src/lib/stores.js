import { derived, writable } from 'svelte/store';
import { browser } from '$app/env';

export let session = writable();
export let showCart = writable(false);

const storedcart = JSON.parse(browser && localStorage.getItem('cart')) || [];
export const cart = writable(browser && storedcart);
cart.subscribe((val) => browser && (localStorage.cart = JSON.stringify(val)));

export let total = derived(cart, (cart) =>
	cart.reduce((acc, obj) => acc + obj.price * 50 * obj.quantity, 0)
);

// export let total = writable(0);
