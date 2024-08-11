<script lang="ts">
	import { onMount } from 'svelte';
	import dialogBox from '$lib/images/dialogBox.png';
	import mainPage from '$lib/images/mainPage.png';

	let imageWidth: number | undefined;
	let imageHeight: number | undefined;

	onMount(() => {
		const img = new Image();
		img.src = dialogBox;
		img.onload = () => {
			imageWidth = img.width;
			imageHeight = img.height;
		};
	});

	function startTest() {
		window.location.href = '/question';
	}
</script>

<div class="container">
	<div class="dialog">
		<img src={dialogBox} alt="Dialog Box" width={imageWidth} height={imageHeight} />
		<div class="text">나랑 가장 닮은<br /> 원피스 캐릭터는?</div>
	</div>
	<button on:click={startTest}>시작하기</button>
	<div class="character-images">
		<img src={mainPage} alt="mainPage" />
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

	.dialog {
		position: relative;
		margin-top: 2rem;
	}

	.dialog img {
		width: 85%;
		height: auto;
		max-width: 400px;
	}

	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
		font-size: 30px;
		font-weight: bold;
		white-space: nowrap; /* 줄 바꿈 없이 한 줄에 표시 */
	}

	.character-images {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 2rem;
	}

	.character-images img {
		width: 90%;
		height: auto;
	}

	button {
		margin-top: 2rem;
		padding: 1rem 2rem;
		font-size: 25px;
		background-color: rgb(174, 174, 174);
		color: white;
		border: 3.5px solid black;
		border-radius: 10px;
		cursor: pointer;
		box-shadow: 1px 3px 5px rgb(62, 62, 62);
		transition: all 0.3s ease; /* 전환 효과 */
	}

	button:hover {
		background-color: black;
	}
</style>
