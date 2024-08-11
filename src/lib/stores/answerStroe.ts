// src/lib/stores/answerStore.ts
import { writable } from 'svelte/store';

export const selectedAnswers = writable<number[]>([]);
