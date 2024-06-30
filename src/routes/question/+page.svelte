<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { questionStore } from '../../lib/stores/questionStore';
	import type { Question } from '../../lib/stores/questionStore';

	// 현재 질문의 인덱스와 질문을 저장할 변수
	let currentQuestionIndex = 0;
	let currentQuestion: Question = {
		question: '',
		image: '',
		answers: []
	};

	// questionStore를 구독하여 질문 데이터를 가져옴
	let unsubscribe = questionStore.subscribe((questions: Question[]) => {
		currentQuestion = questions[currentQuestionIndex];
	});

	// 페이지가 로드될 때 초기화 작업
	onMount(() => {
		// 초기 질문 설정
		currentQuestion = $questionStore[currentQuestionIndex];
	});

	// 답변 선택 처리 함수
	function selectAnswer(answer: string) {
		console.log(`선택한 답변: ${answer}`);

		// 여기서 선택한 답변을 처리할 수 있음
		// 예를 들어, 선택한 답변에 따라 다음 질문으로 넘어가기
		nextQuestion();
	}

	// 다음 질문으로 넘어가는 함수
	function nextQuestion() {
		currentQuestionIndex++;
		if (currentQuestionIndex < $questionStore.length) {
			currentQuestion = $questionStore[currentQuestionIndex];
		} else {
			// 질문이 모두 끝나면 다른 작업 수행 (예: 결과 페이지로 이동)
			console.log('모든 질문이 끝났습니다.');
		}
	}

	// 컴포넌트가 파기될 때 구독 해제
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="container">
	<div class="question">
		<h3>{currentQuestion.question}</h3>
		<img src={currentQuestion.image} alt="Question Image" />
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
		height: 100vh; /* 화면 전체 높이 만큼 설정 */
		text-align: center;
	}
	.question {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
		font-size: 20px;
		font-weight: bold;
		white-space: nowrap; /* 줄 바꿈 없이 한 줄에 표시 */
	}
	.question img {
		width: 85%;
		height: auto;
		max-width: 300px;
	}
	.button-container {
		display: flex;
		flex-direction: row; /* 버튼을 가로로 배치 */
		gap: 1rem; /* 버튼 사이 간격 설정 */
		justify-content: center; /* 버튼을 수평 가운데 정렬 */
		margin-top: 1rem; /* 원하는 만큼의 위쪽 여백 설정 */
	}
	button {
		margin-top: 2rem;
		padding: 1rem 2rem;
		font-size: 10px;
		background-color: grey;
		color: white;
		cursor: pointer;
	}
</style>
