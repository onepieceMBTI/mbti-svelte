<script lang="ts">
	import { onMount } from 'svelte';

	let selectedAnswers: string[] = [];

	onMount(() => {
		const answers = localStorage.getItem('selectedAnswers');
		if (answers) {
			selectedAnswers = JSON.parse(answers) as string[];
		}
	});
</script>

<div>
	<h1>Your Selected Answers</h1>
	<ul>
		{#each selectedAnswers as answer}
			<li>{answer}</li>
		{/each}
	</ul>
</div>
