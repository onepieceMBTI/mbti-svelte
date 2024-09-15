<script lang="ts">
	import { onMount } from 'svelte';
	import { resultStore } from '$lib/stores/resultStore';
	import { selectedAnswers } from '$lib/stores/answerStore';

	console.log('selectedAnswers', $selectedAnswers);
</script>
