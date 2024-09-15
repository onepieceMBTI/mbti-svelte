// src/lib/stores/answerStore.ts
import { writable } from 'svelte/store';

const savedAnswers =
	typeof window !== 'undefined' && localStorage.getItem('selectedAnswers')
		? JSON.parse(localStorage.getItem('selectedAnswers')!)
		: [];

export const selectedAnswers = writable<number[]>(savedAnswers);

if (typeof window !== 'undefined') {
	selectedAnswers.subscribe((value) => {
		localStorage.setItem('selectedAnswers', JSON.stringify(value));
	});
}
