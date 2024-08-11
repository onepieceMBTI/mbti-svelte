<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { questionStore } from '../../lib/stores/questionStore';
	import type { Question } from '../../lib/stores/questionStore';

	let currentQuestionIndex = 0;
	let currentQuestion: Question = {
		question: [],
		image: '',
		answers: []
	};
	const totalQuestions = $questionStore.length;

	let unsubscribe = questionStore.subscribe((questions: Question[]) => {
		currentQuestion = questions[currentQuestionIndex];
	});

	onMount(() => {
		currentQuestion = $questionStore[currentQuestionIndex];
	});

	function selectAnswer(answer: string) {
		console.log(`선택한 답변: ${answer}`);
		nextQuestion();
	}

	function nextQuestion() {
		if (currentQuestionIndex < $questionStore.length - 1) {
			currentQuestionIndex++;
			currentQuestion = $questionStore[currentQuestionIndex];
		} else {
			window.location.href = '/result';
		}
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="container">
	<div class="question-info">
		<div class="question-number">
			{currentQuestionIndex + 1} / {totalQuestions}
		</div>
		<div class="progress-bar">
			<div
				class="progress"
				style="width: {((currentQuestionIndex + 1) / totalQuestions) * 100}%;"
			></div>
		</div>
	</div>
	<div class="question">
		{#each currentQuestion.question as line}
			<div>{line}</div>
		{/each}
		<img src={currentQuestion.image} alt="Question Image" class="question-image" />
		<div class="answers">
			<div class="button-container">
				{#each currentQuestion.answers as answer}
					<button on:click={() => selectAnswer(answer)}>{answer}</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
	}
	.question-info {
		position: absolute;
		top: 14%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: black;
	}
	.question-number {
		font-size: 23px;
		margin-bottom: 8px;
	}

	.progress-bar {
		width: 365px;
		max-width: 365px;
		height: 40px;
		background-color: #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
	}

	.progress {
		height: 100%;
		background-color: black;
	}
	.question {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
		font-size: 23px;
		font-weight: bold;
		margin-top: 15px;
	}
	.question img {
		width: 100%;
		height: auto;
		max-width: 340px;
	}
	.question-image {
		height: auto;
		max-width: 300px;
		margin-top: 25px;
	}
	.button-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0.5rem;
	}
	button {
		margin-top: 1rem;
		height: 85px;
		width: 365px;
		padding: 1rem 2rem;
		font-size: 18px;
		font-weight: bold;
		background-color: rgb(219, 219, 219);
		color: black;
		cursor: pointer;
		border: none;
		border-radius: 15px;
	}
</style>
