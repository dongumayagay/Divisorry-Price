import { writable } from 'svelte/store';

export let showCart = writable(false);

export let cart = writable([]);

export let session = writable();
