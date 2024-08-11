<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { questionStore } from '../../lib/stores/questionStore';
	import type { Question } from '../../lib/stores/questionStore';

	let currentQuestionIndex = 0;
	let currentQuestion: Question = {
		question: '',
		image: '',
		answers: []
	};

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
		currentQuestionIndex++;
		if (currentQuestionIndex < $questionStore.length) {
			currentQuestion = $questionStore[currentQuestionIndex];
		} else {
			console.log('모든 질문이 끝났습니다.');
		}
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="container">
	<div class="question">
		{#each currentQuestion.question as line}
			<div>{line}</div>
		{/each}
		<img src={currentQuestion.image} alt="Question Image" class="question-image"/>
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
	.question {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
		font-size: 23px;
		font-weight: bold;
	}
	.question img {
		width: 100%;
		height: auto;
		max-width: 300px;
	}
	.question-image {
		height: auto;
		max-width: 300px;
		margin-top: 20px;
	}
	.button-container {
		display: center;
		flex-direction: column;
		justify-content: center;
		margin-top: 1rem;
	}
	button {
		margin-top: 1rem;
		height: 85px;
		width: 310px;
		padding: 1rem 1rem;
		font-size: 16px;
		font-weight: bold;
		background-color: rgb(188, 188, 188);
		color: black;
		cursor: pointer;
		border: none;
		border-radius: 15px;
	}
</style>
