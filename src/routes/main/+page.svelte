<script>
	import Counter from '../Counter.svelte';
    import dialogBox from '$lib/images/dialogBox.png'
    import mainPageIllust from '$lib/images/mainPage.png'
</script>

<p>원피스 캐릭터 중 나와 mbti가 비슷한 캐릭터는?</p>
<p>시작하기</p>

<picture>
    <img src={dialogBox} alt="dialogBox" />
    <img src={mainPageIllust} alt="illust" />
</picture>
