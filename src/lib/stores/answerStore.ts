import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';
const savedAnswers = isBrowser ? JSON.parse(localStorage.getItem('selectedAnswers') || '[]') : [];

export const selectedAnswers = writable<number[]>(savedAnswers);

if (isBrowser) {
	selectedAnswers.subscribe((value) => {
		localStorage.setItem('selectedAnswers', JSON.stringify(value));
	});
}
