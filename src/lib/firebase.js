// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAA3BYFgXAUxDXBEpR4HgyMerCYI5VAXVw',
	authDomain: 'divisorry.firebaseapp.com',
	projectId: 'divisorry',
	storageBucket: 'divisorry.appspot.com',
	messagingSenderId: '614307792418',
	appId: '1:614307792418:web:6463a833f670d30f7f2c7b',
	measurementId: 'G-HWT5N3LEE4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
