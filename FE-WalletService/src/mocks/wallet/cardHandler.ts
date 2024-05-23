import {API_BASE} from '@env';
import {rest} from 'msw';
import {PostCardResponse} from '../../api/wallet/usePostCard';
import API_PATH from '../../constants/apiPath';
import cards from './cards.json';

let card_id = 0;

export const cardHandler = [
  // 카드 등록
  rest.post(`${API_BASE}${API_PATH.WALLET.POST_CARD}`, (_, res, ctx) => {
    const responseData: PostCardResponse = {
      message: 'wallet 카드 등록 완료',
      body: {
        card_id: card_id++,
      },
    };
    return res(ctx.status(200), ctx.json(responseData));
  }),
  // 카드 조회
  rest.get(`${API_BASE}${API_PATH.WALLET.GET_CARDS}`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(cards));
  }),
];
