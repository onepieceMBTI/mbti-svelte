import { writable } from 'svelte/store';

export interface Question {
	question: string[];
	image: string;
	answers: string[];
}

const article: Question[] = [
	{
		question: ['잡혀간 동료를 구해줬으니','감사의 의미로 파티를 연다고?'],
		image: 'src/lib/images/firstQ.png',
		answers: ['그럼 난 여기 앉아서 파티를 구경할게', '좋았어! 맛있는거 잔뜩 먹고 춤도 출거야!']
	},
	{
		question: ['기록지침이 다 채워졌으니', '이제 다음 섬으로 탐험할 시간이야!'],
		image: 'src/lib/images/secondQ.png',
		answers: ['다음 섬은 어떤 곳일까? 먹을게 많을까? 주민들은 친절할까?', '오케이 레쓰고']
	},
	{
		question: ['뭐?', '악마의 열매를 먹고 더 강해지고 싶다고?'],
		image: 'src/lib/images/thirdQ.png',
		answers: [
			'그건 위험하지 않을까? 지금도 충분히 강해. 악마의 열매 대신 다른 방법도 찾아보자',
			'음.. 먹는다고 꼭 강해지진 않을거야'
		]
	},
	{
		question: ['감히 내 동료를 데려가?', '용서 못해!'],
		image: 'src/lib/images/fourthQ.png',
		answers: ['적군이 있는 곳으로 당장 뛰어가기', '작전을 짜고 동료들과 행동하기']
	},
	{
		question: ['내가 원하는 선장 스타일은?'],
		image: 'src/lib/images/fifthQ.png',
		answers: ['다정하고 책임감 있는 선장', '유쾌하고 재밌는 선장']
	}
];

export const questionStore = writable(article);
