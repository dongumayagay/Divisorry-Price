import { derived, writable } from 'svelte/store';
import { browser } from '$app/env';

export let showCart = writable(false);

// const storedSession = JSON.parse(browser && localStorage.getItem('session')) || null;
// export let session = writable(browser && storedSession);
// session.subscribe((val) => browser && (localStorage.session = JSON.stringify(val)));
export let session = writable();

const storedcart = JSON.parse(browser && localStorage.getItem('cart')) || [];
export const cart = writable(browser && storedcart);
cart.subscribe((val) => browser && (localStorage.cart = JSON.stringify(val)));

export let total = derived(cart, (cart) =>
	cart.reduce((acc, obj) => acc + obj.price * 50 * obj.quantity, 0)
);
