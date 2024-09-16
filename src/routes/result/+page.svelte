<script lang="ts">
	import { onMount } from 'svelte';
	import { resultStore } from '$lib/stores/resultStore';
	import type { Result } from '$lib/stores/resultStore';
	import { get } from 'svelte/store';

	let selectedAnswers: string[] = [];
	let result: Result | undefined;

	onMount(() => {
		const answers = localStorage.getItem('selectedAnswers');
		if (answers) {
			selectedAnswers = JSON.parse(answers) as string[];
		}

		const selectedType = selectedAnswers.join('');

		const results = get(resultStore);
		result = results.find((r) => r.type === selectedType);
	});
</script>

{#if result}
	<div class="container">
		<div class="result-info">
			<div class="result-image">
				<img src={result.image} alt={result.name} />
			</div>
			<div class="result-name">
				<h1>결과: {result.name}</h1>
			</div>
			<div class="result-information">
				<ul>
					{#each result.information as info}
						<li>{info}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{:else}
	<p>결과를 찾을 수 없습니다.</p>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}

	.result-info {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: black;
	}

	.result-image {
		height: auto;
		width: 100%;
		max-width: 200px;
	}

	.result-name {
		font-size: 2px;
		font-weight: bold;
		color: black;
	}
</style>
