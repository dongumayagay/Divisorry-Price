import { writable } from 'svelte/store';
import { browser } from '$app/env';

export let session = writable();
export let showCart = writable(false);

const storedcart = JSON.parse(browser && localStorage.getItem('cart')) || [];
export const cart = writable(browser && storedcart);
cart.subscribe((val) => browser && (localStorage.cart = JSON.stringify(val)));
