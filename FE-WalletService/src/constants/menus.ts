interface Menu {
  icon?: string;
  title: string;
  info?: string;
  link?: string;
}

const ADD: Menu[] = [
  {
    icon: 'paycard',
    title: '결제 카드',
    link: 'AddCardMain',
  },
  {
    icon: 'account',
    title: '계좌',
  },
  {
    icon: 'membership',
    title: '멤버십',
  },
  {
    icon: 'coupon',
    title: '쿠폰',
  },
  {
    icon: 'digitalkey',
    title: '디지털 키',
    info: '도어록, 자동차',
  },
  {
    icon: 'mobileid',
    title: '모바일 신분증',
    info: '운전면허증, 학생증 등',
  },
  {
    icon: 'boardingpass',
    title: '탑승권',
    info: '비해기 탑승권, 버스 승차권',
  },
  {
    icon: 'ticket',
    title: '티켓',
  },
  {
    icon: 'digitalasset',
    title: '디지털 자산',
  },
  {
    icon: 'digitalcertificate',
    title: '전자증명서',
  },
  {
    icon: 'mobilecarrierservice',
    title: '이동통신사 제휴 서비스',
  },
];

const ADD_CARD: Menu[] = [
  {
    title: '사진으로 찍어 카드 추가',
    link: 'AddCard',
  },
  {
    title: '삼성페이 충전카드 발급받기',
    info: '충전카드를 간편하게 온라인으로 신청하고 바로 사용하세요.',
  },
  {
    title: '휴대폰 결제 추가',
    info: '결제 및 구매 금액이 휴대전화 요금으로 청구됩니다.',
  },
  {
    title: '이전에 사용하던 모바일 카드 추가',
  },
];

interface Menus {
  [key: string]: Menu[];
  ADD: Menu[];
  ADD_CARD: Menu[];
}

const MENUS: Menus = {
  ADD,
  ADD_CARD,
};

export type {Menu};
export default MENUS;
