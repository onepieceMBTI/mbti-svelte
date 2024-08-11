import { writable } from 'svelte/store';

export interface Result {
  name: string;
  image: string;
  information: string[];
}

const result: Result[] = [
  // ENFJ
  {
    name: '샹크스',
    image: 'src/lib/images/ENFJ-1.png',
    information: ['리더십이 뛰어나다', '동료를 소중히 여긴다', '긍정적인 에너지를 전달한다']
  },
  {
    name: '상디',
    image: 'src/lib/images/ENFJ-2.png',
    information: ['매너가 좋고 친절하다', '사람들을 잘 챙긴다', '의리와 충성심이 강하다']
  },
  // ENFP
  {
    name: '봉쿠레',
    image: 'src/lib/images/ENFP-1.png',
    information: ['사람들에게 밝고 유쾌하다', '변화와 모험을 즐긴다', '친구를 위해 헌신한다']
  },
  {
    name: '닥터 히루루크',
    image: 'src/lib/images/ENFP-2.png',
    information: ['낙천적이며 꿈이 많다', '다른 사람을 고무시키는 힘이 있다', '모험을 두려워하지 않는다']
  },
  // ENTJ
  {
    name: '크로커다일',
    image: 'src/lib/images/ENTJ-1.png',
    information: ['전략적 사고가 뛰어나다', '강력한 리더십을 발휘한다', '목표 지향적이고 결단력이 있다']
  },
  {
    name: '핸콕',
    image: 'src/lib/images/ENTJ-2.png',
    information: ['자신감이 넘친다', '강한 카리스마를 가진다', '타인을 이끄는 능력이 있다']
  },
  // ENTP
  {
    name: '골D 로저',
    image: 'src/lib/images/ENTP-1.png',
    information: ['자유로운 사고방식을 가진다', '항상 새로운 도전을 찾는다', '유머 감각이 뛰어나다']
  },
  {
    name: '우솝',
    image: 'src/lib/images/ENTP-2.png',
    information: ['창의적이고 상상력이 풍부하다', '유연한 사고를 한다', '입담이 좋고 말을 잘한다']
  },
  // ESFJ
  {
    name: '카루',
    image: 'src/lib/images/ESFJ-1.png',
    information: ['충성심이 강하다', '타인을 잘 돌본다', '팀의 분위기를 잘 챙긴다']
  },
  {
    name: '브룩',
    image: 'src/lib/images/ESFJ-2.png',
    information: ['친절하고 배려심이 많다', '사교성이 뛰어나다', '타인의 감정을 잘 이해한다']
  },
  // ESFP
  {
    name: '파파구',
    image: 'src/lib/images/ESFP-1.png',
    information: ['활기차고 에너지가 넘친다', '모두와 잘 어울린다', '순간을 즐기며 살아간다']
  },
  {
    name: '미스 발렌타인',
    image: 'src/lib/images/ESFP-2.png',
    information: ['밝고 긍정적인 성격', '자유분방하고 즐거움을 추구한다', '사람들과 어울리는 것을 좋아한다']
  },
  // ESTJ
  {
    name: '버기',
    image: 'src/lib/images/ESTJ-1.png',
    information: ['조직적이고 체계적이다', '리더 역할을 좋아한다', '규칙과 질서를 중시한다']
  },
  {
    name: '나미',
    image: 'src/lib/images/ESTJ-2.png',
    information: ['현실적이고 실용적이다', '책임감이 강하다', '계획을 잘 세우고 실행한다']
  },
  // ESTP
  {
    name: '벨메일',
    image: 'src/lib/images/ESTP-1.png',
    information: ['대담하고 결정력이 있다', '행동이 빠르고 직관적이다', '현실적이고 문제 해결에 능하다']
  },
  {
    name: '프랑키',
    image: 'src/lib/images/ESTP-2.png',
    information: ['모험심이 강하다', '즉흥적이고 활동적이다', '실질적인 해결책을 찾는다']
  },
  // INFJ
  {
    name: '빈스모크 소라',
    image: 'src/lib/images/INFJ-1.png',
    information: ['이상주의적이고 깊이 생각한다', '타인을 돕고자 하는 마음이 크다', '자신만의 신념이 있다']
  },
  {
    name: '바솔로뮤 쿠마',
    image: 'src/lib/images/INFJ-2.png',
    information: ['조용하면서도 강한 의지', '타인을 위해 희생할 줄 안다', '자신의 가치관에 충실하다']
  },
  // INFP
  {
    name: '코라손',
    image: 'src/lib/images/INFP-1.png',
    information: ['따뜻한 마음을 가졌다', '타인을 돕는 것을 좋아한다', '자신의 감정을 소중히 여긴다']
  },
  {
    name: '시라호시',
    image: 'src/lib/images/INFP-2.png',
    information: ['순수하고 마음이 여리다', '타인을 쉽게 믿는다', '내면의 세계가 깊다']
  },
  // INTJ
  {
    name: '크로',
    image: 'src/lib/images/INTJ-1.png',
    information: ['계획적이고 전략적이다', '미래를 내다보는 능력이 있다', '자신의 목표에 집중한다']
  },
  {
    name: '빅토리아 신드리',
    image: 'src/lib/images/INTJ-2.png',
    information: ['이성적이고 논리적이다', '독립적이며 자기 주장이 강하다', '장기적인 목표를 세운다']
  },
  // INTP
  {
    name: '쿠마시',
    image: 'src/lib/images/INTP-1.png',
    information: ['분석적이고 논리적이다', '독창적인 사고를 한다', '조용한 타입이다']
  },
  {
    name: '로빈',
    image: 'src/lib/images/INTP-2.png',
    information: ['머리가 좋다', '단독 행동을 좋아하고 낯을 가린다', '특정 사람에게만 마음을 연다']
  },
  // ISFJ
  {
    name: '라분',
    image: 'src/lib/images/ISFJ-1.png',
    information: ['헌신적이고 충성스럽다', '타인을 돌보는 것을 중요하게 여긴다', '전통과 안정감을 중시한다']
  },
  {
    name: '초파',
    image: 'src/lib/images/ISFJ-2.png',
    information: ['따뜻하고 배려심이 많다', '소극적이지만 친절하다', '타인의 감정을 잘 이해한다']
  },
  // ISFP
  {
    name: '쿠이나',
    image: 'src/lib/images/ISFP-1.png',
    information: ['섬세하고 감수성이 풍부하다', '자유로운 영혼을 가졌다', '자신만의 세계가 있다']
  },
  {
    name: '페로나',
    image: 'src/lib/images/ISFP-2.png',
    information: ['개성이 강하고 독특하다', '감정 표현이 솔직하다', '예술적 감각이 뛰어나다']
  },
  // ISTJ
  {
    name: '아이스버그',
    image: 'src/lib/images/ISTJ-1.png',
    information: ['책임감이 강하다', '신뢰할 수 있다', '계획적이고 체계적이다']
  },
  {
    name: '칼리파',
    image: 'src/lib/images/ISTJ-2.png',
    information: ['논리적이고 조직적이다', '업무에 철저하다', '신뢰를 중요하게 여긴다']
  },
  // ISTP
  {
    name: '노지코',
    image: 'src/lib/images/ISTP-1.png',
    information: ['현실적이고 실용적이다', '대담하고 독립적이다', '문제를 해결하는 능력이 뛰어나다']
  },
  {
    name: '조로',
    image: 'src/lib/images/ISTP-2.png',
    information: ['단호하고 결단력이 있다', '고독을 즐긴다', '상황에 맞게 유연하게 대처한다']
  }
];



export const resultStore = writable(result);